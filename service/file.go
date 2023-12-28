package service

import (
	"bufio"
	"context"
	pb "grpc/proto"
	"grpc/provider/export"
	"io"
	"math"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type FileService struct {
	pb.UnimplementedFileServiceServer
}

func (f *FileService) Info(ctx context.Context, r *pb.FileInfoRequest) (*pb.FileInfo, error) {
	fi := export.Get(r.Code)
	return &pb.FileInfo{
		Code:     fi.Code,
		Status:   fi.Status,
		Path:     fi.Path,
		Filename: fi.FileName,
		Fullname: fi.FullName,
		Ext:      fi.Ext,
		Size:     fi.Size,
	}, nil
}

func (f *FileService) Download(r *pb.DownloadFileRequest, s pb.FileService_DownloadServer) error {

	fi := export.Get(r.Code).Open()

	r.End = int64(math.Min(float64(r.End), float64(fi.Size)))

	remain := r.End - r.Start

	if remain > 10*1024*1024 {
		return status.Error(codes.InvalidArgument, "slice can not over than 10M")
	}

	re := bufio.NewReader(fi.File)
	if _, err := re.Discard(int(r.Start)); err != nil {
		return status.Errorf(codes.Aborted, "%v", err)
	}

	sl := 1024
	buffer := make([]byte, sl)

	for remain > 0 {

		if remain > int64(sl) {
			remain -= int64(sl)
		} else {
			sl = int(remain)
			remain = 0
		}

		if _, err := re.Read(buffer); err != nil && err != io.EOF {
			return status.Errorf(codes.Aborted, "%v", err)
		}

		if err := s.Send(&pb.Chunk{
			Content: buffer[:sl],
		}); err != nil {
			return status.Errorf(codes.Aborted, "%v", err)
		}
	}

	return nil
}
