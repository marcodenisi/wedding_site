$("#rsvp_form").submit(function (event) {

    console.info("Calling lambda")

    /* stop form from submitting normally */
    event.preventDefault();

    let is_present = "false";
    if (document.getElementById('gridRadios1').checked) {
        is_present = "true";
    }

    $.ajax({
        type: "POST",
        url: "https://rtr69l0ps7.execute-api.eu-west-1.amazonaws.com/test/post",
        crossDomain: true,
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
            name: $('#inputName').val(),
            surname: $('#inputSurname').val(),
            confirm: is_present,
            participants: $('#inlineFormCustomSelectPref').val(),
            notes: $('#inputNotes').val()
        })
    }).then(function (data) {
        console.info(data);
        $('#rsvpAlert').addClass('show');
    });
});