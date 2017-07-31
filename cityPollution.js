var dirtCities = ["Boston", "Amsterdam", "London", "Seattle"];
var numElements = dirtCities.length;
var matchFound = false;
var cityToCheck = prompt("Enter your city");
var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
for (var i = 0; i < numElements; i++) {
	if (cappedCity === dirtCities[i]) {
		matchFound = true;
		alert(cappedCity + " is filthy!");
		break;
	}
	if (matchFound === "no") {
		alert(cappedCity + " isn't so bad. Relax!");
		
	}
}
