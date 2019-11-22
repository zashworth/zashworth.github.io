const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('weather icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('weather icon').setAttribute('alt', desc);
  });