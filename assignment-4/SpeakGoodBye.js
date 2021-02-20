
// IIFE
(function (window) {

	var byeSpeaker = {};
	byeSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}

	byeSpeaker.speakSimple = function(name){
		return speakWord + " " + name
	}

	var speakWord = "Good Bye";
	window.byeSpeaker = byeSpeaker

})(window);