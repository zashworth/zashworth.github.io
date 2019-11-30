function weather() {
let town = document.getElementById('townName').innerHTML;
let townID = "";
if (town == "Preston") {
  townID = "5604473"
}
else if (town == "Soda") {
  townID = "5607916"
}
else {
  townID = "5585010"
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + townID + "&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&APPID=9e98a4bbd0cee37a9ef56989d1966f90&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);

    if (jsObject.main.temp <= 50 && jsObject.wind.speed >= 3) {
        
      var a = 35.75 + (0.6215 * jsObject.main.temp);
      var b = 35.75 * Math.pow(jsObject.wind.speed, 0.16);
      var c = 0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16);
      var d = a - b + c;

      document.getElementById("wind").innerHTML = d.toFixed(0) + " &#8457;";
  }
  else {
      document.getElementById("wind").innerHTML = "N/A" ;
  }

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
        text.innerHTML = Math.round(jsObject.list[i].main.temp) + " &#8457;";
        image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
        image.setAttribute('alt', description);
        tableRow[t].appendChild(image);
        tableRow[t].appendChild(text);


        t++;
      }
    }  

  });

  
}
weather()