
var AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-08-10'});;

exports.handler = (event, context, callback) => {

    const requestBody = event;

    const tableName = process.env.HISTORICO_CLICK;

    var params = {
          TableName: tableName,
          Item: {
            'Data' : {S:  `${requestBody.ip}  -  ${new Date().toLocaleString()}`},
            'ip':  {S: requestBody.ip },
            'city': {S: requestBody.city},
            'latitude': {S: requestBody.latitude.toString()},
            'longitude': {S: requestBody.longitude.toString()}
          }
        };

    let response = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        }
    };

    try {
        
        dynamoDb.putItem(params, function(err, data) {
          
              if (err) {
                
                console.log("Error", err);
                response.statusCode = 500;
                
              } else {
                
                response.statusCode = 200;
              }
              
              callback(null, response);
            });
        
    } catch (err) {

        console.log("Error", err);
        response.statusCode = 500;
        
        return response;
    }
};
