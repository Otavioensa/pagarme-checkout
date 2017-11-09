
import { keys } from './config'

const { api_key } = keys


const capture = (token, amount) => ({
  method: 'POST',
  uri: `https://api.pagar.me/1/transactions/${token}/capture`,
  body: {
    amount,
    api_key,
  },
  json: true,
})

const transaction = (params) => {
  const payload = Object.assign({ api_key }, params)

  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: payload,
    json: true,
  }
}

export { capture, transaction }
