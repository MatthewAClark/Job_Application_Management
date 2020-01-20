/* eslint-disable no-console*/

process.env.NODE_ENV = 'dev'

const app = require('./server.js');
const PORT = process.env.PORT;


// Turn on the server
//
app.listen(PORT, function (err) {
  if(err) throw(err);
  console.log(`App listening on port ${PORT}`);
});
