$(function() {

  const formButton = $('.order')

  $.getScript('https://assets.pagar.me/checkout/checkout.js', () => {

    formButton.click(() => {

      const checkout = new PagarMeCheckout.Checkout({
        encryption_key: "",
        success: (data) => {
          alert(data)
        },
        error: (e) => {
          alert(e)
        }
      })

      const params = {
        amount: '8500',
        buttonText: "Pagar",
        customerData: false,
        paymentMethods: "boleto,credit_card",
        maxInstallments: 12,
        uiColor: "#0086b3",
        postbackUrl: "requestb.in/1234",
        createToken: true,
        interestRate: 12,
        freeInstallments: 3,
        defaultInstallment: 1,
        headerText: "Pagamento"
      }

      checkout.open(params)
    })
  })
})
