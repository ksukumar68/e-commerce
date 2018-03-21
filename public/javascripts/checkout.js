var stripe = Stripe('pk_test_aougAogWjRGJkmcYb67tV6GX');
var elements = stripe.elements();

var $form = $('#checkout-form');
$form.submit(function(event){
	$form.find('button').prop('disabled', true);
	
});