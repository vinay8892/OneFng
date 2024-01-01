jQuery(function ($) {

    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Invalid mobile number format");

    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");

    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");

    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");

    jQuery.validator.addMethod("intlTelNumber", function(value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid International Phone Number");





        $('#contact-form').validate({
            rules: {
                fnameContactUs: {
                    required: true,
                    maxlength: 100
                },
                lnameContactUs: {
                    //required: true,
                    //maxlength: 100
                },
                mobileContactUs: {
                    required: true,
                    number:true,
                    //minlength: 10,
                    //maxlength: 10
                },
                emailContactUs: {
                    //required: true,
                    //email: true
                }
            },
            messages:
                {
                    fnameContactUs:
                        {
                            required: "Please enter first name"
                        },
                    lnameContactUs:
                        {
                            //required: "Please enter last name"
                        },
                    mobileContactUs:
                        {
                            required: "Please enter mobile no",
                            //minlength: "Min 10 digit mobile number",
                            //maxlength: "Invalid mobile number"
                        },
                    emailContactUs:
                        {
                            //required: "Please enter email",
                            //email: "Please enter valid email address"
                        }
                }
        });



	$('#price-popup').validate({
            rules: {
                PriceName: {
                    required: true,
                    maxlength: 100
                },
                PriceMobile: {
                    required: true,
                    number:true,
                    //minlength: 10,
                    //maxlength: 10
                }
            },
            messages:
                {
                    PriceName:
                        {
                            required: "Please enter name"
                        },
                    PriceMobile:
                        {
                            required: "Please enter mobile no",
                            //minlength: "Min 10 digit mobile number",
                            //maxlength: "Invalid mobile number"
                        }
                }
    });

  
        $('#main-popup').validate({
            rules: {
                POPUPName: {
                    required: true,
                    maxlength: 100
                },
                POPUPMobile: {
                    required: true,
                    number:true,
                    //minlength: 10,
                    //maxlength: 10
                },
                POPUPOtp: {
                    required: true,
                    number: true
                }
            },
            messages:
                {
                    POPUPName:
                        {
                            required: "Please enter name"
                        },
                    POPUPMobile:
                        {
                            required: "Please enter mobile no",
                            //minlength: "Min 10 digit mobile number",
                            //maxlength: "Invalid mobile number"
                        },
                    POPUPOtp:
                        {
                            required: "Please enter Otp"
                        }
                }



        });
   

        $('#float-form').validate({
            rules: {
                interestedName: {
                    required: true,
                    maxlength: 100
                },
                interestedMobile: {
                    required: true,
                    number:true,
                    //minlength: 10,
                    //maxlength: 10
                },
                interestedEmail: {
                    //required: true,
                    //email: true
                }
            },
            messages:
                {
                    interestedName:
                        {
                            required: "Please enter name"
                        },
                    interestedMobile:
                        {
                            required: "Please enter mobile no",
                            //minlength: "Min 10 digit mobile number",
                            //maxlength: "Invalid mobile number"
                        },
                    interestedEmail:
                        {
                            //required: "Please enter email",
                            //email: "Please enter valid email address"
                        }
                }
        });
  





});
