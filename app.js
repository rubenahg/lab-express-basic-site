const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/public'));

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/pages/homepage/index.html`)
})

app.get(`/about`, (req, res) => {
    res.sendFile(__dirname + `/pages/about/about.html`)
})

app.get(`/works`, (req, res) => {
    res.sendFile(__dirname + `/pages/works/works.html`)
})

app.get(`/photo-gallery`, (req, res) => {
    res.sendFile(__dirname + `/pages/photo-gallery/photo-gallery.html`)
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})