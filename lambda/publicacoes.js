var AWS = require("aws-sdk");

var sendSMS = (mensagem) => 
{
    let sms = `Raio Desentupidora. \n Tel: ${mensagem.tel} \n Nome: ${mensagem.name} \n Email: ${mensagem.email}`

    var sns = new AWS.SNS({ region: 'us-east-1' });

    var promise = new Promise((resolve, reject) =>
    {
        sns.publish({
            TopicArn: "arn:aws:sns:us-east-1:692365767931:raiodedetizadora-sms",
            Message: sms
        }, function (err, data) {
            if (err) {
                console.error('error publishing to SNS - SMS');
                //context.fail(err);
                reject("Erro ao enviar SMS");
            } else {
                console.info('SUCESS - message published to SNS - SMS');
                //context.succeed(null, data);
                resolve("SUCESS - SMS enviado com sucesso");
            }
        });
    });

    return promise;
};

var sendEmail = (mensagem) => 
{

    let htmlRemetente = "<h2>Nova mensagem vinda do site: Raio Desentupidora<h2>"
    htmlRemetente += "<p>Nome:" + mensagem.name + "<p>"
    htmlRemetente += "<p>Email:" + mensagem.email + "<p>"
    htmlRemetente += "<p>Telefone:" + mensagem.tel + "<p>"
    htmlRemetente += "<p>Mensagem:" + mensagem.message + "<p>"

    var sns = new AWS.SNS({ region: 'us-east-1' });

    var promise = new Promise((resolve, reject) =>
    {
        sns.publish({
            TopicArn: "arn:aws:sns:us-east-1:692365767931:raiodedetizadora-email",
            Message: htmlRemetente
        }, function (err, data) {
            if (err) {
                console.error('error publishing to SNS - EMAIL');
                //context.fail(err);
                reject("Erro ao enviar um e-mail");
            } else {
                console.info('SUCESS - message published to SNS - EMAIL');
                //context.succeed(null, data);
                resolve("SUCESS - Email enviado com sucesso");
            }
        });
    });

    return promise;
};

module.exports = { sendSMS, sendEmail }