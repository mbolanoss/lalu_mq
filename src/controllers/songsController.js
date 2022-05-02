const rabbitMQchannel = require("../config/rabbitmqConfig");

const songsQueue = "songs";

async function enqueueSong(songFile) {
  rabbitMQchannel.then(async (channel) => {
    await channel.assertQueue(songsQueue);

    await channel.sendToQueue(songsQueue, songFile.data);
  });
}

module.exports = { enqueueSong };
