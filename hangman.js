//variable declarations

var word = "";

var list = ["dog",
			"cat",
			"dragon",
			"cow",
			"pig",
			"horse",
			"bird",
			"griffin",
			"tiger",
			"lion"];


var listofletters = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
	
var index = 0;

var htmlcode = "<div class='wordletters'></div>";

var correctletters = "";

//initalize game setup
function startgame(){
	//to-do: implement
}

//handeles key press events
document.onkeypress = function(e) {
	e = e || window.event;
	//handles letters being guessed
	guessletters(e);
	checkword(e);
	drawword(e);
};

//check for each letter in the word
//if gueessd correctly, correctletters is updated
function checkword(e){
	var letter = String.fromCharCode(e.keyCode);
	for (var i = 0; i < word.length; i++) {
		if(letter == word.charAt(i)) {
			//alert("you guessed correctly " + letter)
			correctletters = correctletters + letter;
		}
		else{
			correctletters = correctletters + "-";
		}

	}
}

//getrs the array of correctly guessed letters
//draws the html of word guessed so far
function drawword(){
		
		var correctletterhtml = "";

		for (var i = 0; i < correctletters.length; i++) {
			if(word.charAt(i) == correctletters.charAt(i)) {
				correctletterhtml = correctletterhtml + "<div class='wordletters'>" + correctletters.charAt(i) + "</div>";
			}
			else{
				correctletterhtml = correctletterhtml + "<div class='wordletters'></div>";		
			}

	}
	document.getElementById("word").innerHTML = correctletterhtml;
}

//generates random number for word
function randomnumber(){
	return Math.floor(Math.random() * 10);
}	

//gnerates random word for list
function generateword (){
	word = list[randomnumber()];
	var wordhtml = document.getElementById("word").innerHTML
	//i++ ----> i = i + 1
	for(var i = 0; i < word.length; i++){
		wordhtml = wordhtml+ htmlcode
		document.getElementById("word").innerHTML=wordhtml;
	}
}

//handles guessing of letters
function guessletters(e){
	var flag = false;
	//only allow lowercase letters as input
	if (e.keyCode >= 97 && e.keyCode <= 122) {
	
		//get letters html
		var lettersHTML = document.getElementById("char").innerHTML;
		//go through the list of lessters
		for (var i = 0; i < listofletters.length; i++) {
			//check if letter is already in list
			if (String.fromCharCode(e.keyCode) == listofletters[i]) {

				flag = true;
			}
		}

		if (!flag) {
			//update html wiht new key pressed
			lettersHTML = lettersHTML + " " + String.fromCharCode(e.keyCode);
			
			//update html of char
			document.getElementById("char").innerHTML = lettersHTML;
				
			//add letter to array
			listofletters[index] = String.fromCharCode(e.keyCode);
			index = index + 1;
		}
		else{
			alert("You already tried that letter, please try again.")
		}
	}
	 
	else {
		alert("Please enter a valid lowercase letter");
	}
}