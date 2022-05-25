const express = require('express')
const app = express()
const shortid = require('shortid')
const cors = require('cors')
const Nimbbl = require('NimbblApi')

app.use(cors())

const nimbbl = new Nimbbl({
  key_id: 'access_key_x1DveRbWzVmWW3KB',
  key_secret: 'access_secret_1DvejDD1MqoWW3KB',
})

app.post('/nimbbl', async (req, res) => {
  const payment_capture = 1
  const amount = 50
  const currency = 'INR'

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  }

try{
    const response = await nimbbl.order.create(options)
    console.log(response)
    res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    })
}catch(error){
    console.log(error)
}
 
})

app.listen(1337, () => {
  console.log('listening on 1337')
})
