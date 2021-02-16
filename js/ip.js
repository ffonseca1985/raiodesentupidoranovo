
function adionarDadosIp(dados) {

    var settings = {
        "url": "https://814jkks2d2.execute-api.us-east-1.amazonaws.com/default/",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify(dados)
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    }).fail(function () {

        console.log('Error')
    });
}

$(document).ready(function () {

    $.getJSON('https://api.ipdata.co?api-key=cc04e147e074ad451ad03176e70d6a56ab320996f24afe3b1a03d3fd', function (data) {
        adionarDadosIp(data)
    });
})