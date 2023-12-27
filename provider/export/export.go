package export

import (
	"bytes"
	"context"
	"encoding"
	"errors"
	"fmt"
	"grpc/provider/cache"
	"os"
	"strconv"
	"time"

	"github.com/google/uuid"
)

const expiration time.Duration = 30 * time.Minute

const (
	CSV  string = "csv"
	XLSX string = "xlsx"
)

const (
	StatusExporting = iota
	StatusFinished
	StatusFailed
	StatusOverExpiration
)

type Export struct {
	File     *os.File
	Code     string
	Status   int
	Path     string
	FileName string
	FullName string
	Ext      string
}

func (e *Export) MarshalBinary() (data []byte, err error) {
	b := bytes.NewBuffer(nil)
	b.WriteString(fmt.Sprint(e.Status))
	b.WriteByte('\t')
	b.WriteString(e.Path)
	b.WriteByte('\t')
	b.WriteString(e.FileName)
	b.WriteByte('\t')
	b.WriteString(e.Ext)
	return b.Bytes(), nil
}

func (e *Export) UnmarshalBinary(data []byte) error {
	results := bytes.Split(data, []byte{'\t'})
	if len(results) != 4 {
		return errors.New("not valid format")
	}
	e.Status, _ = strconv.Atoi(string(results[0]))
	e.Path = string(results[1])
	e.FileName = string(results[2])
	e.Ext = string(results[3])

	e.FullName = fmt.Sprintf("%v.%v", e.FileName, e.Ext)

	var err error
	e.File, err = os.Open(fmt.Sprintf("%v/%v", e.Path, e.FullName))
	if err != nil {
		panic(err)
	}

	return nil
}

var _ encoding.BinaryMarshaler = new(Export)
var _ encoding.BinaryUnmarshaler = new(Export)

func New(filename string, ext string) *Export {
	now := time.Now()
	path := fmt.Sprintf("public/export/%v-%v", now.Year(), int(now.Month()))

	if _, err := os.Stat(path); os.IsNotExist(err) {
		os.MkdirAll(path, os.ModePerm)
	}

	if filename == "" {
		filename = uuid.NewString()
	}

	if file, err := os.Create(fmt.Sprintf("%v/%v.%v", path, filename, ext)); err == nil {

		if ext == CSV || ext == XLSX { //utf-8 bom头
			file.WriteString("\xEF\xBB\xBF")
		}

		e := &Export{
			File:     file,
			Code:     uuid.NewString(),
			Status:   StatusExporting,
			Path:     path,
			FileName: filename,
			FullName: fmt.Sprintf("%v.%v", filename, ext),
			Ext:      ext,
		}

		//创建记录
		cache.Cache().Set(context.Background(), e.Code, e, expiration)

		return e
	} else {
		panic(err)
	}
}

func Get(code string) *Export {
	e := &Export{}
	//读取记录，只读打开
	if err := cache.Cache().Get(context.Background(), code).Scan(e); err != nil {
		return &Export{
			Code:   code,
			Status: StatusOverExpiration,
		}
	}

	e.Code = code
	return e
}

func (e *Export) Finish() {
	//更新记录
	e.Status = StatusFinished
	cache.Cache().Set(context.Background(), e.Code, e, expiration)

	defer e.File.Close()
}
