function forecastDays() {
var tableHead = document.getElementsByTagName('th');
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let r = 1;
let d = new Date().getDay()  
    
for (j = 0; j <= tableHead.length + 1; j++) {
  let dayText = document.createElement('p');
  dayText.innerHTML = days[(d + r)];
  tableHead[j].appendChild(dayText);
  if ((d + r) < 7) {
    r++; 
  }
  else {
    r = 0;
    d = 0;
  }
           
} }
forecastDays()