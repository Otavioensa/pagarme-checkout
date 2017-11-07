$(function() {
	var pop = $('.popbtn')
	var row = $('.row:not(:first):not(:last)')
	const formButton = $('.order')


	pop.popover({
		trigger: 'manual',
		html: true,
		container: 'body',
		placement: 'bottom',
		animation: false,
		content: function() {
			return $('#popover').html()
		}
	})


	pop.on('click', function(e) {
		pop.popover('toggle')
		pop.not(this).popover('hide')
	})

	$(window).on('resize', function() {
		pop.popover('hide')
	})

	row.on('touchend', function(e) {
		$(this).find('.popbtn').popover('toggle')
		row.not(this).find('.popbtn').popover('hide')
		return false
	})

	formButton.click(() => {

		const payload = {
			type: 'POST',
			url: '/checkout',
			data: {
				amount: $("#totalPrice").text()
			},
			success: (response) => {
				
			},
			dataType: 'json'
		}

		 $.ajax(payload)
	})

})
