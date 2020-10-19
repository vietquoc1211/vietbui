import express, { static } from 'express';
import { join } from 'path';
const app = express();

// Serve static files....
app.use(static(__dirname + '/dist/vietbui'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(join(__dirname + '/dist/vietbui/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);

