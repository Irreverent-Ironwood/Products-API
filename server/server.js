const express = require('express')
const app = express()
const port = 3000
const Controller = require('../Controller/Controller.js')

app.get('/', (req, res) => {
  res.send('Welcome to Server Side Set UP')
})

app.get('/products', Controller.Products)

app.get(`/products/:product_id`,Controller.Product)

app.get(`/products/:product_id/related`, Controller.Related)

app.get(`/products/:product_id/styles`, Controller.Styles)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
