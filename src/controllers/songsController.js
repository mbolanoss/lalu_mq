const rabbitMQconn = require("../config/rabbitmqConfig");

const songsQueue = "songs";

async function enqueueSong(songFile) {
  rabbitMQconn.then(async (conn) => {
    const channel = await conn.createChannel();

    await channel.assertQueue(songsQueue);

    await channel.sendToQueue(songsQueue, songFile.data);
  });
}

module.exports = { enqueueSong };
