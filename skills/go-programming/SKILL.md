---
name: go-programming
description: Use when asked to write, explain, or debug general-purpose Go code — goroutines and channels, error handling idioms, interfaces, modules — independent of any specific framework.
---

# Go Programming

Covers the Go (Golang) language and its standard tooling. Go was designed
for simplicity, fast compilation, and built-in concurrency support.

## Goroutines and channels

```go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)  // launch 3 concurrent goroutines
    }

    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    for a := 1; a <= 5; a++ {
        <-results
    }
}
```

A goroutine is a lightweight, runtime-managed thread — cheap enough to
launch thousands of them. Channels are the idiomatic way goroutines
communicate and synchronize, following Go's stated philosophy: "don't
communicate by sharing memory; share memory by communicating." An
unbuffered channel blocks the sender until a receiver is ready; a
buffered channel (`make(chan int, 5)`) only blocks once the buffer fills.

## Error handling

```go
func readConfig(path string) (string, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return "", fmt.Errorf("reading config %s: %w", path, err)
    }
    return string(data), nil
}
```

Go has no exceptions for ordinary error handling — functions that can
fail return an `error` as their last return value, and callers check it
explicitly with `if err != nil`. `%w` in `fmt.Errorf` wraps the original
error so callers can inspect it with `errors.Is`/`errors.As`, preserving
the error chain rather than losing context.

## Interfaces

```go
type Shape interface {
    Area() float64
}

type Circle struct{ Radius float64 }

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func PrintArea(s Shape) {
    fmt.Println(s.Area())
}
```

Interfaces in Go are satisfied implicitly — a type doesn't declare
`implements Shape`; it simply needs the right methods. This structural
typing keeps types decoupled from the interfaces they satisfy, and is
central to idiomatic Go API design (small interfaces, defined by the
consumer, not the implementer).

## Modules

```sh
go mod init example.com/myproject   # start a new module
go get github.com/some/package      # add a dependency
go build                            # compile
go test ./...                       # run all tests
go vet                              # static analysis
```

`go.mod` declares the module path and dependencies; `go.sum` pins
cryptographic checksums of every dependency version for reproducible,
verified builds.

## Common pitfalls

- **Ignoring returned errors** — a discarded `error` return value (`_`)
  or an unchecked `err` is one of the most common sources of silent Go
  bugs; check every error unless deliberately and visibly ignoring it.
- **Goroutine leaks** — a goroutine blocked forever on a channel that's
  never sent to (or never closed) never terminates and never gets garbage
  collected; ensure every goroutine has a clear termination path.
- **Data races from sharing memory across goroutines without
  synchronization** — use channels, `sync.Mutex`, or `sync/atomic`
  rather than unsynchronized shared variables; `go run -race` catches
  many of these at test time.
- **Nil pointer interface gotcha** — a nil pointer wrapped in an
  interface value is not itself a nil interface value; `var p *T; var i
  interface{} = p` makes `i != nil` even though `p == nil`.

## Learn more

- [A Tour of Go](https://go.dev/tour/)
- [Effective Go](https://go.dev/doc/effective_go)
- [Go standard library docs](https://pkg.go.dev/std)
