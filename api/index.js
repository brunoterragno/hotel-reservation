const express = require('express');
const app = express();
const port = 3009;

const cors = require('cors');
app.use(cors());

const hotels = require('./hotels.json');

app.get('/', (req, res) => {
  res.send('Hotel reservation api');
});

app.get('/hotels/offers', (req, res) => {
  res.send(hotels.slice(0, 4));
});

app.get('/hotels/search', (req, res) => {
  res.send(hotels);
});

app.get('/hotels/:id', (req, res) => {
  const hotel = hotels.find((hotel) => hotel.id === req.params.id);
  res.status(hotel ? 200 : 404).send(hotel);
});

app.listen(port, () => {
  console.log(`Hotel reservation api listening on port ${port}`);
});
