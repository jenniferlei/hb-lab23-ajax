'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  evt.preventDefault();

  fetch('/fortune')
    .then(response => response.text())
    .then(fortune => {
      document.querySelector('#fortune-text').innerHTML = fortune;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const urlRequest = `/weather.json?zipcode=${zipcode}`;

  fetch(urlRequest)
    .then(response => response.json())
    .then(weather => {
      document.querySelector('#weather-info').innerHTML = weather['forecast'];
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
