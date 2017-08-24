var str = "This is a single string, and not exactly an array.";

function ends(str) {
  var arr = str.split(" ");
  var first = arr.slice(0, 2);
  first = first.join(" ");
  var second = arr.slice(arr.length - 2, arr.length);
  second = second.join(" ");
  return first + " " + second;
  
}
alert(ends("To be or not to be, that is the question."));

//results in "To be the question" which is a plausible answer
//the question is my life, I am my life,... I am the question,
//and the question is the answer, between being and not being...
