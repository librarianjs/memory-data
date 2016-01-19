# Librarian In Memory Data

A [Librarian](https://github.com/librarianjs/librarian) data plugin that stores records in memory. For development and experimentation only. You shouldn't use this in production. Passes the [data plugin test suite](https://github.com/librarianjs/librarian/blob/master/docs/data-plugin-tests.md)

Compatible with Librarian v2.0 and above.

## Installation

```sh
npm install librarian-memory-data
```

## Usage
```js
var librarian = require('librarian')
var InMemoryData = require('librarian-memory-data')
var app = librarian({
    data: new InMemoryData
})
app.listen(8888)
```
