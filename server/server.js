const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Server Side Set UP')
})

app.get('/data', (req, res)=>{


})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
