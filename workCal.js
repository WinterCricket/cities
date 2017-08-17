var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu",
  "Fri", "Sat"
];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert(nameOfToday);
if (nameOfToday === "Fri") {
  alert("Freedom of speech is not equal to freedom of physical assault. Grow up!");
}
else
{
  alert("Social harmony isn't to be paid for at the expense scientific insight. To call that progressive is insane.")
}