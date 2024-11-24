function toggleBlindfold() {
	let elts = document.getElementsByClassName("main-board");
	if (!elts) return;
	
	if (!elts[0].classList.contains("blindfold")) {
		elts[0].classList.add("blindfold");
	} else {
		elts[0].classList.remove("blindfold");
	}
};

Mousetrap.bind("b", toggleBlindfold);