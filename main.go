package main

import (
	"net/http"
)

func main() {
	fsPublic := http.FileServer(http.Dir("public"))
	http.Handle("/", fsPublic)

	fsSrc := http.FileServer(http.Dir("src"))
	http.Handle("/src/", http.StripPrefix("/src/", fsSrc))

	println("Server is running on http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}