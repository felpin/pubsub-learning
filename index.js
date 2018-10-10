// Imports the Google Cloud client library
const PubSub = require('@google-cloud/pubsub');

// Creates a client
const pubsub = new PubSub();

const topicName = 'dyp-topic';
const data = JSON.stringify({ foo: 'bar' });

// Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
const dataBuffer = Buffer.from(data);

pubsub
  .topic(topicName)
  .publisher()
  .publish(dataBuffer)
  .then(messageId => {
    console.log(`Message ${messageId} published.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
