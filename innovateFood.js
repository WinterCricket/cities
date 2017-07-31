var animals = ["cat", "dog"];
var foods = ["milk", "cheese", "eggs"];
var foodItems = [];
var k = 0;
for (var i = 0; i < animals.length; i++) {
	for (var j = 0; j < foods.length; j++) {
		alert(foodItems[k] = animals[i] + foods[j]);
		k++;
	}
}