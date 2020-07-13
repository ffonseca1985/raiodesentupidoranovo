var AWS = require("aws-sdk");
var publicacoes = require("./publicacoes");

exports.handler = async function (event, context, callback) 
{
//    console.log("Received event:", JSON.stringify(event, null, 2));

    let mensagem = {
        name: event.name,
        email: event.email,
        tel: event.tel,
        message: event.message
    };
    
    var response = {
        event: event,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        }
    };

    try 
    {
        await publicacoes.sendEmail(mensagem)
        await publicacoes.sendSMS(mensagem);

        response.statusCode = 200;
    } 
    catch (error) {
        response.statusCode = 500;
    }

    callback(null, response);
}