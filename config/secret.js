if(process.env.NODE_ENV === 'production'){
  console.log("we have production");
  module.exports = {database: process.env.MONGODB_URI,
                    secret: process.env.secret};
} else {
  console.log("local deployment");
  module.exports = {database: 'mongodb://root:abc123@ds133221.mlab.com:33221/arashtwitter',
                    secret: "hahahaha88888"};
}



// module.exports = {
//   // database: 'mongodb://root:abc123@ds133221.mlab.com:33221/arashtwitter',
//   database: 'mongodb://dvt:dvt123@ds251362.mlab.com:51362/witter',
//   secret: "hahahaha88888"
//
// }
