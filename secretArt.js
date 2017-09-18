function longGraph() {
	var fullGraph = "If civilization is prolonged childhood, a child whose goal is safety, then the arts, if not the means of civilization, contains its meaning. To summarize briefly,<ol><li> the emotions--especially basic emotions--are commonly held to be biologically primitive responses,</li><li> hard-wired into the nervous system </li><li>over the course of evolution. But who cares at this stage?</li><li> Rhetoric and emotion are the bald pups of Rome lore.</li><li> If this makes sense to you,</li><li> you are either highly imaginative or insane, </li><li>though you could be both.</li><li> You see, this is filler until I put real content into my app.</li>";
	document.getElementById("secretArt").innerHTML = fullGraph;

}

function resize() {

	document.getElementById("big").className += " sizeChange";
}

function toHide() {
	document.getElementById("big").className  += " hidden";
}
function swapPic(eId, newPic) {
	document.getElementById(eId).src = newPic;
}