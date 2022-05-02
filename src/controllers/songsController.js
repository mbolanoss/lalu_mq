const rabbitMQconn = require("../config/rabbitmqConfig");

async function testQueue() {
  rabbitMQconn.then(async (conn) => {
    const channel = await conn.createChannel();

    await channel.assertQueue("test");

    for (let i = 0; i < 4; i++) {
      await channel.sendToQueue("test", Buffer.from(i.toString()));
    }
  });
}

module.exports = { testQueue };
