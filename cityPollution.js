function CleanCities() {
var cleanestCities = ["Boston", "Quebec", "Paris", "Vienna"];
var numElements = cleanestCities.length;
var matchFound = "no";
var cityToCheck = prompt("Which city do you want to check?");
for (var i = 0; i < numElements; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    alert(cityToCheck + " is a damned clean city!");
    break;
  }
}
if (matchFound === "no") {
  alert(cityToCheck + " is not especially clean for a city.");
}
}