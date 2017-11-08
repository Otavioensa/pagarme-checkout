
import { keys } from './config'

const api_key = keys.api_key

const capture = (token, amount) => ({
  method: 'POST',
  uri: `https://api.pagar.me/1/transactions/${token}/capture`,
  body: {
    amount,
    api_key,
  },
  json: true,
})

export { capture }
