$( document ).ready(function() {

  // Begin show/hide info about Base URL
  $('#help-center-radio').click(function(){
    $('#base-url-hc').removeClass("hidden");
    $('#base-url-contact').addClass("hidden");
    $('#base-url-error').addClass("hidden");
  });
  $('#contact-page-radio').click(function(){
    $('#base-url-contact').removeClass("hidden");
    $('#base-url-hc').addClass("hidden");
    $('#base-url-error').addClass("hidden");
  });
  // End show/hide info about Base URL

  // Begin show/hide info about Solvvy bypass when selecting yes/no
  $('#solvvy_bypass_yes').click(function(){
    $('#bypass_info_yes').removeClass("hidden");
    $('#bypass_info_no').addClass("hidden");
    $('#bypass-error').addClass("hidden");
  });
  $('#solvvy_bypass_no').click(function(){
    $('#bypass_info_no').removeClass("hidden");
    $('#bypass_info_yes').addClass("hidden");
    $('#bypass-error').addClass("hidden");
  });
  // End show/hide info about Solvvy bypass when selecting yes/no



  // Begin Show/hide auto open info
  $('#auto_open_yes').click(function(){
    $('#auto_open_info_yes').removeClass("hidden");
    $('#auto_open_info_no').addClass("hidden");
    $('#auto-open-error').addClass("hidden");
  });
  $('#auto_open_no').click(function(){
    $('#auto_open_info_no').removeClass("hidden");
    $('#auto_open_info_yes').addClass("hidden");
    $('#auto-open-error').addClass("hidden");
  });
  // End show/hide info auto open

  // Begin Generate URL
  $('#generate-button').click(function(){

    // Set values
    var tagsParam = "&tags=";
    var emailParam ="&email=";
    var tagsValue = tagsParam + $("#tag-input").val();
    var emailValue = emailParam + $("#email").val();

    // Set variable for base URL
    if ($('#help-center-radio').is(':checked')){
      var baseURL = ['https://support.scribd.com/hc?']
    }
    else if ($('#contact-page-radio').is(':checked')) {
      var baseURL = ['https://www.scribd.com/contact?']
    }
    else {
      $('#base-url-error').removeClass("hidden");
    }




    // Add Solvvy bypass param to URL, or display error if nothing selected
    if ($('#solvvy_bypass_yes').is(":checked")){
      baseURL.push('solvvy=false')
    }
    else if ($('#solvvy_bypass_no').is(":checked")){
      $('#bypass-error').addClass("hidden");

    }
    else if ($('#solvvy_bypass_yes').not(":checked") && $('#solvvy_bypass_no').not(":checked")){
      $('#bypass-error').removeClass("hidden");
    };



    // Add email param to URL
    if ($('#email').val() != ''){
      baseURL.push(emailValue);
    };

    // Add tags to URL
    if ($('#tag-input').val() != ''){
      baseURL.push(tagsValue);
    };

    // Add auto open param to URL
    if ($('#auto_open_yes').is(":checked")){
      baseURL.push('&launchSettings=auto')
    }

    else if ($('#auto_open_no').is(":checked")){
      $('#auto-open-error').addClass("hidden");
    }

    else if ($("#auto_open_yes").not(":checked") && $("#auto_open_no").not(":checked")){
    $('#auto-open-error').removeClass("hidden");


  };


    // Combine params and set generatedURL param
    var generatedURL = baseURL.join('');

    $("#generated-URL-box").removeClass('hidden');
    $("#url-text").val(generatedURL);


    console.log(generatedURL)





  })
// Prevent certain characters
  $("input").on({
    keydown: function(spacebar) {
      if (spacebar.which === 32)
        return false;

    },
    change: function() {
      this.value = this.value.replace(/\s/g, "");
    }


  });







});


// Copy URL
function copyURL() {
/* Get the text parent text field */
var copyText = document.getElementById("url-text");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/

/* Copy the text inside the text field */
  document.execCommand("copy");

/* Alert the copied text */

$("#copy-success").removeClass("hidden");
};
