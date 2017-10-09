$(function() {

/********** INIT **********/

$('.preload').removeClass('preload');

$(window).keydown(function(event){
	if(event.keyCode == 13) {
		event.preventDefault();
		return false;
	}
});

/********** variables *********/

var act_step = 0;
var query_email = "";

var user_data = {
	donation : { 
		amount : ""
	},
	user : {
		firstname : "",
		lastname : "",
		email : "",
		invoice : false,
		address : "",
		city : "",
		country : "",
		stated_supporter : true
	},
	payment : {
		method : "",
		agb : false,
		newsletter : true
	}
};



var vp_width = $(window).width();
//var layout = 'smartphone';
//if (vp_width > 640) layout = 'tablet';
//if (vp_width > 1024) layout = 'desktop';
//$('#layout').val(layout);

/********** parameter *********/

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}

/********** IF PAYMENT FAILED **********/

var status_payment = $_GET("p");

if (status_payment == "failed") {

	$('.error-msg--3').html("<b>Die Zahlung ist fehlgeschlagen.</b> Bitte versuchen Sie es erneut oder wählen Sie eine andere Zahlungsart. Sie können uns gerne auch direkt <a href='mailto:mitgliedschaft@dossier.at'>kontaktieren.</a>")
	$('.error-msg--3').addClass('error-msg--visible');

	$('.carousel-controls__button--back').removeClass('carousel-controls__button--enabled')

	/***** parse cookie to user_data object and update form fields accordingly *****/

	cookie = $.parseJSON($.cookie("dossier_wirecard"));
	console.log(cookie);

	user_data = {
		donation : {
			amount : cookie['donation']
		},
		user : {
			firstname : cookie['firstname'],
			lastname : cookie['lastname'],
			email : cookie['email'],
			email_step_3 : cookie['email-step-3'],
			password : cookie['password'],
			password_repeat : cookie['password_repeat'],
			invoice : cookie['invoice'],
			address : cookie['address'],
			city : cookie['city'],
			country : cookie['country'],
			stated_supporter : cookie['stated_supporter'],
			payment_failed : cookie['payment-failed'],
			payment_method : cookie['payment-method']
		}
	};

	$('#donation').val(user_data.donation.amount);

	$('#firstname').val(user_data.user.firstname);
	$('#lastname').val(user_data.user.lastname);
	$('#email').val(user_data.user.email);
	$('#email-step-3').val(user_data.email_step_3);
	$('#password').val(user_data.user.password);
	$('#password_repeat').val(user_data.user.password_repeat);
	$('#invoice').attr('checked', user_data.user.invoice);
	$('#address').val(user_data.user.address);
	$('#city').val(user_data.user.city);
	$('#country').val(user_data.user.country);
	$('#stated_supporter').attr('checked', user_data.user.stated_supporter);

	$('.payment-method__radio').attr('checked', false);
	$('#'+ user_data.user.payment_method).attr('checked', 'checked');

	$('#payment-failed').val(true);

	act_step = 1;
	next();
	act_step = 2;
	proceed();

} else {
	act_step = 0;
	next();
}

/********** form validation *********/

$('#form').validate({
    rules: {
        donation: {
            required: true
        },
        firstname: {
            required: true
        },
        lastname: {
            required: true
        }
    },
    errorPlacement: function(error,element) {
		return true;
	}
});


/*********** CONTROLS *********/

/********** general before animation *********/

$('.carousel-controls__button--next').click(function(){

	proceed();

});


function proceed() {

/***** departing from step 1 *****/

if (act_step == 1 ) {

	$('.error-msg--1').removeClass('error-msg--visible');
	$('.error-msg--1').html("");

	if ($('#donation').val()) {

		user_data.donation.amount = $('#donation').val();

		next();

		if (user_data.donation.amount >= 1200) {

			$('.stated_supporter-wrap').addClass('stated_supporter-wrap--act');
			$('#stated_supporter').addClass('checkbox--hidden');
			$("label[for='stated_supporter']").addClass('label--hidden');
			$('.stated_supporter-wrap').append("<div class='stated_supporter-wrap__info stated_supporter-wrap__info--act small'><hr class='separator separator--invisible'>Spenden ab 1.200 Euro pro Jahr legen wir im  Sinne der Transparenz offen.</div>");

		} else {

			$('#stated_supporter').removeClass('checkbox--hidden');
			$("label[for='stated_supporter']").removeClass('label--hidden');
			$('.stated_supporter-wrap__info').removeClass('stated_supporter-wrap__info--act');

		}

	} else {

		$('.error-msg--1').addClass('error-msg--visible');
		$('.error-msg--1').html("<b>Bitte geben Sie eine gültige Summe an.</b>");
		$('#donation').addClass("error");

	}

}

/***** departing from step 2 *****/

else if (act_step == 2 ) {

	$('.error-msg--2').removeClass('error-msg--visible');
	$('.error-msg--2').html("");

	if ($("#form").valid()) {

		if (status_payment != "failed") {

			user_data.user = {
				firstname : $('#firstname').val(),
				lastname : $('#lastname').val(),
				email : $('#email').val(),
				invoice : $('#invoice').is(':checked'),
				address : $('#address').val(),
				city : $('#city').val(),
				country : $('#country').val(),
				stated_supporter : $('#stated_supporter').is(':checked')
			};

		}

		next();

		if (user_data.user.email != "") {
			$(".carousel-step--3 .newsletter-wrap").addClass('newsletter-wrap--invisible');
		} else {
			$(".carousel-step--3 .newsletter-wrap").removeClass('newsletter-wrap--invisible');
		}

		if (user_data.user.stated_supporter == true || user_data.user.invoice == true) {

			$('.validate-title').addClass("validate-title--visible");

			if (user_data.user.stated_supporter == true) {
				$('.validate-user').html(user_data.user.firstname + " " + user_data.user.lastname + "<br>" + user_data.user.email);
			}
			if (user_data.user.invoice == true) {
				$('.validate-address').html(user_data.user.address + "<br>" + user_data.user.city + ", " + user_data.user.country);
			}

		} else {
			$('.validate-title').removeClass("validate-title--visible");
		}

		$('.validate-memb').html("Ihre Spende über <b>€ <span class='validate-donation-amount'>" + user_data.donation.amount + "</span></b> wird einmalig abgebucht.");

		$('input[type=radio][name=payment-method]').change(function() {

			if ($(this).val() == "transaction") {

				$('.validate-memb').html("Ihre Spende über <b>€ <span class='validate-donation-amount'>" + user_data.donation.amount + "</span></b> ist einmalig zu überweisen.");

			} else {

				$('.validate-memb').html("Ihre Spende über <b>€ <span class='validate-donation-amount'>" + user_data.donation.amount + "</span></b> wird einmalig abgebucht.");

			}

		});

	} else {

		$('.error-msg--2').addClass('error-msg--visible');
		$('.error-msg--2').html("<b>Bitte füllen Sie die markierten Felder vollständig aus.</b>");

	}

}

/***** departing from step 3 *****/

else if (act_step == 3 ) {

	if ($('#agb').is(':checked') == true) {

		user_data.payment = {
			method : $('input[name=payment-method]:checked', '#form').val(),
			agb : $('#agb').is(':checked'),
			newsletter : $('#newsletter').is(':checked')
		}

		$("#form").submit();

	} else {

		$('.error-msg--3').html("<b>Bitte akzeptieren Sie die AGB / Datenschutzrichtlinien.</b>");
		$('.error-msg--3').addClass('error-msg--visible');
		$('#email').addClass("error");

	}

}

}

/********** next *********/

function next() {

	$('.carousel-step--'+act_step).removeClass('carousel-step--act');
	$('.carousel-step--'+act_step).addClass('carousel-step--prev');
	$('.progress__item--'+act_step).removeClass('progress__item--act');
	$('.progress__item--'+act_step).addClass('progress__item--past');

	act_step = act_step + 1;
	$('.carousel-step--'+act_step).removeClass('carousel-step--next');
	$('.carousel-step--'+act_step).addClass('carousel-step--act');
	$('.progress__item--'+act_step).addClass('progress__item--act');

}


/********** back *********/

$('.carousel-controls__button--back').click(function(){

	$('.carousel-step--'+act_step).removeClass('carousel-step--act');
	$('.carousel-step--'+act_step).addClass('carousel-step--next');
	$('.progress__item--'+act_step).removeClass('progress__item--act');

	act_step = act_step - 1;
	$('.carousel-step--'+act_step).removeClass('carousel-step--prev');
	$('.carousel-step--'+act_step).addClass('carousel-step--act');
	$('.progress__item--'+act_step).removeClass('progress__item--past');
	$('.progress__item--'+act_step).addClass('progress__item--act');

	$('.stated_supporter-wrap__info').removeClass('stated_supporter-wrap__info--act');

});

/********** general after animation *********/

$('.carousel-controls__button').click(function(){

/***** arriving at steps 1 + 4 *****/

	if (act_step > 1 && act_step < 4  && status_payment != "failed") {
		$('.carousel-controls__button--back').addClass('carousel-controls__button--enabled');
	} else {
		$('.carousel-controls__button--back').removeClass('carousel-controls__button--enabled');
	}

});


/********* STEP 1 *********/



/********* STEP 2 *********/

/***** toggle stated supporter fields *****/

$('#stated_supporter').click(function(){
	$('.stated_supporter-wrap').toggleClass('stated_supporter-wrap--act');
	if ($('.stated_supporter-wrap').hasClass('stated_supporter-wrap--act')) {
		$('#firstname').rules( "add", { required: true });
		$('#lastname').rules( "add", { required: true });
	} else {
		$('#firstname').rules( "remove" );
		$('#lastname').rules( "remove" );
	}
});

/***** toggle invoice fields *****/

$('#invoice').click(function(){
	$('.invoice-wrap').toggleClass('invoice-wrap--act');
	if ($('.invoice-wrap').hasClass('invoice-wrap--act')) {
		$('#firstname-invoice').rules( "add", { required: true });
		$('#lastname-invoice').rules( "add", { required: true });
		$('#email').rules( "add", { required: true });
		$('#address').rules( "add", { required: true });
		$('#city').rules( "add", { required: true });
		$('#country').rules( "add", { required: true });
	} else {
		$('#firstname-invoice').rules( "remove" );
		$('#lastname-invoice').rules( "remove" );
		$('#email').rules( "remove" );
		$('#address').rules( "remove" );
		$('#city').rules( "remove" );
		$('#country').rules( "remove" );
	}
});

/***** duplicate first- & lastname to other field *****/

$("#firstname").keyup(function() { $("#firstname-invoice").val($(this).val()); });
$("#firstname-invoice").keyup(function() { $("#firstname").val($(this).val()); });
$("#lastname").keyup(function() { $("#lastname-invoice").val($(this).val()); });
$("#lastname-invoice").keyup(function() { $("#lastname").val($(this).val()); });

/***** duplicate email to step 3 *****/

$("#email").keyup(function() { $("#email-step-3").val($(this).val()); });


/********* STEP 3 *********/

/***** toggle email field *****/


});
