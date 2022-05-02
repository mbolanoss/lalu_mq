const rabbitMQchannel = require("../config/rabbitmqConfig");

const songsQueue = "songs";

async function enqueueSong(songFile) {
  rabbitMQchannel.then(async (channel) => {
    await channel.assertQueue(songsQueue);

    song = {
      name: songFile.name,
      data: songFile.data,
    };

    await channel.sendToQueue(songsQueue, Buffer.from(JSON.stringify(song)));
  });
}

module.exports = { enqueueSong };
