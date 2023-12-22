package strh

import "strings"

func Snake(s string) string {
	num := len(s)
	data := make([]byte, 0, num*2)
	for i := 0; i < num; i++ {
		d := s[i]

		if d == '_' {
			continue
		}

		if i > 0 && d <= 'Z' && d >= 'A' {
			data = append(data, '_')
		}

		data = append(data, d)
	}
	return strings.ToLower(string(data[:]))
}

func FromSnake(s string) string {
	num := len(s)
	data := make([]byte, 0, len(s))
	j, k := false, false

	for i := 0; i < num; i++ {
		d := s[i]

		if !k && d >= 'A' && d <= 'Z' {
			k = true
		}
		if d >= 'a' && d <= 'z' && (j || !k) {
			d = d - 32
			j, k = false, true
		}
		if k && d == '_' && num > i && s[i+1] >= 'a' && s[i+1] <= 'z' {
			j = true
			continue
		}
		data = append(data, d)
	}

	return string(data[:])
}

func UcFirst(s string) string {
	return strings.ToUpper(s[:1]) + s[1:]
}
