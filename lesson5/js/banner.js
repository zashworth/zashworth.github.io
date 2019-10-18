function showBanner() {
var weekDay = new Date().getDay();

if(weekDay == 5) {
    document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
    document.getElementById("banner").style.padding = "6px"
}
else {

}
}

showBanner()
