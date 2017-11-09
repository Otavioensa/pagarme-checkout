/* eslint-disable */
$(() => {
  const formButton = $('.order')
  const scriptUri = 'https://assets.pagar.me/checkout/checkout.js'

  const getCaptureParams = (token, amount) => (
    {
      type: 'POST',
      url: '/capture',
      data: {
        token,
        amount,
      },
      success: () => alert(JSON.stringify('Success! :)')),
      error: err => alert(JSON.stringify(err)),
      dataType: 'json',
    }
  )

  const getCreateTransactionParams = data => (
    {
      type: 'POST',
      url: '/transaction',
      data,
      success: () => alert(JSON.stringify('Success! :)')),
      error: err => alert(JSON.stringify(err)),
      dataType: 'json',
    }
  )

  const capture = (data, orderParams) => $.ajax(getCaptureParams(
    data.token,
    orderParams.amount
  ))

  const createTransaction = data => $.ajax(getCreateTransactionParams(data))

  const checkMethod = () => (
    {
      true: capture,
      false: createTransaction,
    }
  )

  const orderAction = () => {
    const isToken = $('#paymentMethod').val()

    const orderParams = {
      amount: '8500',
      buttonText: 'Pagar',
      customerData: 'true',
      paymentMethods: 'boleto,credit_card',
      maxInstallments: 12,
      uiColor: '#0086b3',
      postbackUrl: 'https://requestb.in/1mcqcmc1',
      createToken: isToken,
      interestRate: 3.5,
      freeInstallments: 3,
      defaultInstallment: 1,
      headerText: 'Pagamento',
    }

    const checkout = new PagarMeCheckout.Checkout({
      encryption_key: 'ek_test_ud9m7MvPkYlsjZZvqX0eUqvXBslUoD',
      success: data => checkMethod(isToken)[isToken](data, orderParams),
      error: e => alert(e),
    })

    checkout.open(orderParams)
  }

  $.getScript(scriptUri, () => formButton.click(() => orderAction()))
})
