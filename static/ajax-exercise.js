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

  const data = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json',}
  })
    .then(response => response.json())
    .then(responseJson => {
      const orderStatus = document.querySelector('#order-status');
      orderStatus.innerHTML = responseJson['msg'];
      if (responseJson['code'] === 'ERROR') {
        orderStatus.classList.add('order-error');
      } else {
        orderStatus.classList.remove('order-error');
      }
    })

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);


function dogImage(evt) {
  evt.preventDefault();

  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => {
      document.querySelector('#dog-api-image').innerHTML = `<img src=${responseJson['message']}>`;
    })
}


document.querySelector('#get-dog-image').addEventListener('click', dogImage);
