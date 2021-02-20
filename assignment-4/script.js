
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
                 "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {	
       	if (names[i].charAt(0).toLowerCase() === 'j')
            byeSpeaker.speak(names[i]);
        else helloSpeaker.speak(names[i]);
    }

    console.log("\n\n")

	// map function to create an array based on above names array
	var greetings = names.map(function(name) {
        if (name.charAt(0).toLowerCase() === 'j')
            return byeSpeaker.speakSimple(name);
        else return helloSpeaker.speakSimple(name);
	})
	
	for (var j = 0; j < names.length; j++)
		console.log(greetings[j])

})();
