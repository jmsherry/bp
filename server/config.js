let mongo = process.env.VCAP_SERVICES;
const port = process.env.PORT || 3030;
let connStr = '';
if (mongo) {
  const env = JSON.parse(mongo);
  if (env.mongodb) {
    mongo = env.mongodb[0].credentials;
    if (mongo.url) {
      connStr = mongo.url;
    } else {
      console.log('No mongo found');
    }
  } else {
    connStr = 'mongodb://localhost:27017/mern-starter';
  }
} else {
  connStr = 'mongodb://localhost:27017/mern-starter';
}

const config = {
  mongoURL: connStr || process.env.MONGO_URL,
  port,
};

export default config;

// const config = {
//   mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
//   port: process.env.PORT || 8000,
// };
//
// export default config;
