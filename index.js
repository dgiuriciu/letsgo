var express = require('express')
var port = 8001
var app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log("Server started on port " + port))