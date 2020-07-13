
$("#btnEnvio").on("click", function(event) {

    
    if ($("#name").val() == ""){
        alert("Favor informar seu Nome.")
        return;
    }

    if ($("#email").val() == "" && $("#tel").val() == ""){
        alert("Favor informar seu E-mail ou um telefone para contato.")
        return;
    }

    var json = 
    {
        name: $("#name").val(),
        email: $("#email").val(),
        tel: $("#tel").val(),
        message: $("#mensagem").val()
    }

    $("#btnEnvio").val("Processando..");

    var url = "https://s463wy47f4.execute-api.us-east-1.amazonaws.com/default/sendemail/";

    var post = $.post(url, JSON.stringify(json), function(){
        alert("Obrigado por escolher nossos serviços - Em breve entraremos em contato!")
        $("#btnEnvio").val("Enviar");
    });

    post.fail(function(ex){
        console.log(ex)
        alert("Obrigado por escolher nossos serviços - Em breve entraremos em contato!")
        $("#btnEnvio").val("Enviar");
    });

    event.preventDefault();
    
});
