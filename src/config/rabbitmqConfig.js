const amqp = require("amqplib");
const dotenv = require("dotenv");

dotenv.config();

const rabbitmqSettings = {
  protocol: "amqp",
  hostname: "localhost",
  port: 5672,
  username: process.env.MQ_USER,
  password: process.env.MQ_PASS,
  vhost: "/",
  authMechanism: ["PLAIN", "AMQPLAIN", "EXTERNAL"],
};

const rabbitMQchannel = connect();

async function connect() {
  try {
    const conn = await amqp.connect(rabbitmqSettings);
    const channel = await conn.createChannel();
    console.log("Succesfully connected to RabbitMQ");
    return channel;
  } catch (error) {
    throw error;
  }
}

module.exports = rabbitMQchannel;
