var text = "It wasn't nice, not one bit a good thing, to have slept on a lumpy cushion, with snow falling outside, and bombs falling, too, for it was World War II, though it wasn't called that back then. Mare didn't call it anything but an interuption, or, as she said, a pain in the arse.";
var term = "World War II";
var replacement = "the Second World War";
var firstChar = text.indexOf(term);
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + replacement + text.slice(firstChar + term.length);
  alert(text);
}
else {
  alert(term + " isn't a banned string.");
}