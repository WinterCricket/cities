var firstNames = ["Big ", "Small ", "Normal "];
var lastNames = ["avenue", "street", "park", "store"];
var fullNames =[];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
    console.log(firstNames[i] + lastNames[j]);
  }
}