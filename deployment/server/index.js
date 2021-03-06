const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.js'))
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})