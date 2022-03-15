const express = require('express');
const hotels = require('./hotels.json');
const users = require('./users.json');
const bookings = require('./bookings.json');
const app = express();
const port = 3009;

app.use(express.json());

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

app.post('/users/login', (req, res) => {
  const user = users.find(
    (user) => user.username === req.body.username && user.password === req.body.password
  );
  if (!user) {
    res.status(401).send('Username or password does not match');
  } else {
    res.send({ ...user, password: '' });
  }
});

app.get('/users/bookings', (req, res) => {
  const user = users.find(
    (user) => user.token === req.headers["authorization"]
  );
  if (!user) {
    res.status(401).send('Invalid token');
  } else {
    console.log(user);
    const bookingList = bookings.find(booking => booking.user_id === user.id);
    res.send(bookingList);
  }
});

app.listen(port, () => {
  console.log(`Hotel reservation api listening on port ${port}`);
});
