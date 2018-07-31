// const options = {
//   useMongoClient: true,
//   // autoIndex: false, // Don't build indexes
//   // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//   // reconnectInterval: 500, // Reconnect every 500ms
//   // poolSize: 10, // Maintain up to 10 socket connections
//   // // If not connected, return errors immediately rather than waiting for reconnect
//   // bufferMaxEntries: 0,
//   // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
//   // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
// };

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/ReechApp', options);
//mongoose.connect(process.env.MONGODB_URI, options);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ReechApp');

module.exports = {mongoose};
