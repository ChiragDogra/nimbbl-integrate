import { Button } from '@mui/material'
import React from 'react'


function loadScript(src) {
  return new Promise((resolve) => {
    //This will create an element script  and inject it into the DOM when the button is clicked
    const script = document.createElement('script')
    script.src = src //it will set src that we're getting as a parameter
    //loading script takes some time so we

    //whenever you load resolve with the status of true and in case of error resolve with status of false
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function Check() {
  async function displayNimbbl() {
    const res = await loadScript(
      'https://api.nimbbl.tech/static/assets/js/checkout.js'
    ) //sending src as an argument

    if (!res) {
      alert('nimbbl SDK failed to load. Are you online?')
      return
    }

    const __DEV__ = document.domain === 'localhost'

    const data = await fetch('http://localhost:1337/nimbbl', {
      method: 'POST',
    }).then((t) => t.json())

    console.log(data)



    const options = {
      access_key: __DEV__ ? 'access_key_x1DveRbWzVmWW3KB' : 'devId', // Enter the Key ID generated from the Dashboard
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      callback_handler: function (response) {
        alert(response.nimbbl_transaction_id)
        alert(response.nimbbl_order_id)
        alert(response.nimbbl_signature)
        alert(response.status)
      },
      custom: {
        key_1: 'val_1',
        key_2: 'val_2',
      },
    }

    window.checkout = new NimbblCheckout(options)
    window.checkout.open()
  }

  return (
    <Button variant="contained" className="" onClick={displayNimbbl}>
      Checkout
    </Button>
  )
}

export default Check
