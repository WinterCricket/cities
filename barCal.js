var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayNum = new Date().getDay();
var dayOfWk = days[dayNum];

switch(dayOfWk) {
case "Sat" :
  alert("Ensure you've got a hangover!");
  break;
case "Sun" :
  alert("Recover from you drink!");
  break;
case "Fri" :
  alert("Second Day of Drinking.");
  break;
case "Thu" :
  alert("Thirsty Thursday!");
  break;
default :
  alert("Go back to bed!");
}