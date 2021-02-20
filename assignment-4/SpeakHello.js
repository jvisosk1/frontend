
// IIFE
(function (window) {

	var helloSpeaker = {};

	helloSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}

	helloSpeaker.speakSimple = function(name){
		return speakWord + " " + name
	}

	var speakWord = "Hello";
	window.helloSpeaker = helloSpeaker

})(window);
