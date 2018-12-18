$('#bankModal').on('show.bs.modal', function (e) {
    $.ajax({
        type: "GET",
        url: "https://rtr69l0ps7.execute-api.eu-west-1.amazonaws.com/test/get",
        crossDomain: true,
        contentType: 'application/json',
        dataType: 'json'
    }).then(function(data) {
        console.info(data);
        $('.iban').html("IBAN: " + data.iban)
        var beneficiaries = data.beneficiaries[0].name + ' ' + data.beneficiaries[0].surname + ', ' + data.beneficiaries[1].name + ' ' + data.beneficiaries[1].surname
        $('.beneficiaries').html("Intestato a: " + beneficiaries)
    });
});