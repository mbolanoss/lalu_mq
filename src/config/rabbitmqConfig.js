const amqp = require("amqplib");

const rabbitmqSettings = {
  protocol: "amqp",
  hostname: "localhost",
  port: 5672,
  username: "lalu_ag",
  password: "lalu_ag",
  vhost: "/",
  authMechanism: ["PLAIN", "AMQPLAIN", "EXTERNAL"],
};

const rabbitMQconn = connect();

async function connect() {
  try {
    const conn = await amqp.connect(rabbitmqSettings);
    console.log("Succesfully connected to RabbitMQ");
    return conn;
  } catch (error) {
    throw error;
  }
}

module.exports = rabbitMQconn;
