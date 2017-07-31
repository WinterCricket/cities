function CleanCities() {
	var cleanestCities = ["boston", "quebec", "paris", "vienna"];
	var numElements = cleanestCities.length;
	var matchFound = false;
	var cityToCheck = prompt("Which city do you want to check?");
	cityToCheck = cityToCheck.toLowerCase();
	for (var i = 0; i < numElements; i++) {
		if (cityToCheck === cleanestCities[i]) {
			matchFound = true;
			alert(cityToCheck + " is a damned clean city!");
			break;
		}
	}
	if (matchFound === "no") {
		alert(cityToCheck + " is not especially clean for a city.");
	}
}