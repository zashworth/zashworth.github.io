const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

  });

  fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let tableRow = document.getElementsByTagName('td');

    for (i = 0; i <= tableRow.length; i++) {
      tableRow[i].innerText = 74 ;
      //tableRow[i].getElementsByTagName('img').setAttribute('src')
    }

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);*/
  });