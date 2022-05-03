const express = require('express')
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

const {read_all, read, edit, creat} = require('./node/chara')

app.get('/api/read_all', (req, res) => {
    read_all(res)
})

app.get('/api/read/:id', (req, res) => {
    read(res, req.params.id)
})

app.post('/api/edit/:id', (req, res) =>{
    edit(req.params.id, req.body.data)
})

app.post('/api/new', (req, res) => {
    creat(req.body.data)
})

app.listen(port, () => {
  console.log(`ポート${port}番に狂気が訪れました`)
})