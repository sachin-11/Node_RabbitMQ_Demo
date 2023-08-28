const amqp = require('amqplib');

const consume = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'demo_queue';
    
    await channel.assertQueue(queue, { durable: false });
    console.log(`Waiting for messages in queue ${queue}`);

    channel.consume(queue, msg => {
      console.log(`Received: ${msg.content.toString()}`);
    }, { noAck: true });
  } catch (error) {
    console.error('Error:', error);
  }
};

consume();
