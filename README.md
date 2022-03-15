# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### UX
[https://www.figma.com/community/file/1013677160891506104](https://www.figma.com/community/file/1013677160891506104)

## How to install

### `git clone https://github.com/brunoterragno/hotel-reservation.git`
### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run start:api`

Runs the api in the development mode.\
Open [http://localhost:3009](http://localhost:3009) to view it in your browser.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Endpoints
[http://localhost:3009/hotels/offers](http://localhost:3009/hotels/offers)
Returns a list of hotel offers (max. 4).

[http://localhost:3009/hotels/search](http://localhost:3009/hotels/search)
Returns a list of hotels based on filter params (not ready).

[http://localhost:3009/hotels/1](http://localhost:3009/hotels/1)
Returns a list of hotels based on hotel id.

[http://localhost:3009/users/login](http://localhost:3009/users/login)
Log in the user
Example:
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "user1@gmail.com",
  "password": "!Testing123"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3009/users/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

[http://localhost:3009/users/bookings](http://localhost:3009/users/bookings)
Returns a list of bookings for that user
Example
var myHeaders = new Headers();
myHeaders.append("Authorization", "4qse8eqw7d89wq94wd");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:3009/users/bookings", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
