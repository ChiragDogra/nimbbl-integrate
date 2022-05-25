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

const user = app.post('/nimbbl', async (req, res) => {
  const amount_before_tax = 45
  const tax = 5
  const total_amount = 50
  const user = {
    mobile_number: '9999999999',
    email: 'rakesh.kumar@example.com',
    first_name: 'Rakesh',
    last_name: 'Kumar',
  }
  const shipping_address = {
    address_1: 'Some address',
    street: 'Your street',
    landmark: 'My landmark',
    area: 'My area',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400018',
    address_type: 'residential',
  }
  
  const invoice_id= 'BrQv9nkxDEqWR3zg'
  
  const currency = 'INR'

  const options = {
    amount: total_amount * 100,
    currency,
    receipt: shortid.generate(),
  }

  try {
    const response = await nimbbl.order.create(options)
    console.log(response)
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(1337, () => {
  console.log('listening on 1337')
})
