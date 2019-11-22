let town = document.getElementById('townName').innerHTML;
let townID = "";
if (town == "Preston Idaho") {
  townID = "5604473"
}
else if (town == "Soda Springs Idaho") {
  townID = "5607916"
}
else {
  townID = "5585010"
}

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=" + townID + "&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);

  });

  fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let tableRow = document.getElementsByTagName('td');
    let t = 0;
    
    for (i = 0; i <= jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.substring(11, 19) == "18:00:00" && t < tableRow.length) {
        let image = document.createElement('img');
        let text = document.createElement('p');
        let icon = jsObject.list[i].weather[0].icon;
        let description = jsObject.list[i].weather[0].description;
        text.innerHTML = jsObject.list[i].main.temp + " &#8457;";
        image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
        image.setAttribute('alt', description);
        tableRow[t].appendChild(image);
        tableRow[t].appendChild(text);


        t++;
      }
    }
      
    
  });