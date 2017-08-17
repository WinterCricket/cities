var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayNum = new Date().getDay();
var dayOfWk = days[dayNum];
if (dayOfWk === "Sat" || dayOfWk === "Sun") {
  alert("Happy Days!");
}
else if (dayOfWk === "Fri") {
  alert("Here we go, two days of drinking.")
}
else if (dayOfWk === "Thu") {
  alert("Thirsty Thursday!");
}
else {
  alert("Go back to bed!");
}