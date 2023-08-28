const express = require('express');
const amqp = require('amqplib');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/publish', async (req, res) => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'demo_queue';
    const message = 'Hello from the publisher!';

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));
    
    console.log(`Published: ${message}`);
    res.send('Message published successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(PORT, () => {
  console.log(`Publisher listening on port ${PORT}`);
});
