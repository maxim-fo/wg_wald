// functions/webhook.js

exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);
    // Perform actions based on the data, update HTML, etc.
    // ...
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook processed successfully" }),
    };
  };
  