function windChill() {
    /* For temps below 50F winds above 3 mph */

    var temp = document.getElementById("temp").innerHTML;
    var windSpeed = document.getElementById("speed").innerHTML;

    if (temp <= 50 && windSpeed >= 3) {
        
        var a = 35.75 + (0.6215 * temp);
        var b = 35.75 * Math.pow(windSpeed, 0.16);
        var c = 0.4275 * temp * Math.pow(windSpeed, 0.16);
        var d = a - b + c;

        document.getElementById("wind").innerHTML = d.toFixed(0);
    }
    else {
        document.getElementById("wind").innerHTML = "N/A" ;
    }

} 

windChill()