$(function() {

  const formButton = $('.order')
  const scriptUri = 'https://assets.pagar.me/checkout/checkout.js'

  const captureParams = (token, amount) => {
    return {
      type: 'POST',
      url: '/capture',
      data: {
        token: checkoutResponse.token,
        amount
      },
      success: (response) => alert(JSON.stringify(response)),
      dataType: 'json'
    }
  }

  const capture = (checkoutResponse, amount) =>
    $.ajax(captureParams(checkoutResponse.token, amount))

  const orderParams = {
    amount: '8500',
    buttonText: 'Pagar',
    customerData: true,
    paymentMethods: 'boleto,credit_card',
    maxInstallments: 12,
    uiColor: '#0086b3',
    postbackUrl: 'https://requestb.in/1mcqcmc1',
    createToken: true,
    interestRate: 3.5,
    freeInstallments: 3,
    defaultInstallment: 1,
    headerText: 'Pagamento'
  }

  const orderAction = () => {

    const checkout = new PagarMeCheckout.Checkout({
      encryption_key: '',
      success: (checkoutResponse) => capture(checkoutResponse, orderParams.amount),
      error: (e) => alert(e)
    })

    checkout.open(orderParams)
  }

  $.getScript(scriptUri, () => formButton.click(() => orderAction()))
})
