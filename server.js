const express = require('express')
const path = require('path')
const compression = require('compression')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express()
const port = process.env.PORT
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) //imediately invoke with stripe key.

//convert all incoming request 'body' tag to json. Simular to the way fetch you have to call '.json()' on it.
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, (error) => {
  if (error) throw error
  console.log('Server running on http://localhost:' + port)
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js'))
})

//req object comes from the client.  res is what we send to client.
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})
