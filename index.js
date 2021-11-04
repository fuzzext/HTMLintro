const express = require('express')
const app = express()
 


app.use(express.static('./public'))
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/:nome', function (req, res) {
    res.send('Hello '+ req.params.nome)
  })
const port = 3000
 
app.listen(port, () => {
    console.log(`Listenning  on port ${port}`)
})