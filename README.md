# RabbitMQ Demo

This is a basic demonstration of RabbitMQ message publishing and consuming using Node.js and Express. The demo includes a publisher that sends messages to a queue and a consumer that receives and logs those messages.

## Installation

1. Install Node.js: https://nodejs.org/
2. Install RabbitMQ: https://www.rabbitmq.com/download.html

## Setup

1. Clone or download this repository.
2. Navigate to the project directory: `cd rabbitmq-demo`
3. Install dependencies: `npm install`

## Publisher

The publisher sends a message to a RabbitMQ queue.

- **Endpoint:** `/publish`
- **Port:** 3000

To publish a message, visit `http://localhost:3000/publish` in your browser or use a tool like `curl`.

## Consumer

The consumer listens to the RabbitMQ queue and logs received messages.

To start the consumer, run: `node consumer.js`

## Running the Demo

1. Start the consumer: `node consumer.js`
2. In a separate terminal, start the publisher: `node publisher.js`
3. Visit `http://localhost:3000/publish` to send a message.

## Note

This demo provides a basic understanding of RabbitMQ message publishing and consuming. In real-world scenarios, you'd handle error handling, acknowledge messages, set up more advanced configurations, and implement more complex communication patterns.

