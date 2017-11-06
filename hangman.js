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

//initalize game setup
function startgame(){
	//to-do: implement
}

//handeles key press events
document.onkeypress = function(e) {
	e = e || window.event;
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
	}
	 
	else {
		alert("Please enter a valid lowercase letter");
	}
};


//generates random number for word
function randomnumber(){
	return Math.floor(Math.random() * 10);
}	

//turns random number into word
function generateword (){
	word = list[randomnumber()];
	var htmlcode = "<div class='wordletters'></div>";
	var wordhtml = document.getElementById("word").innerHTML
	//i++ ----> i = i + 1
	for(var i = 0; i < word.length; i++){
		wordhtml = wordhtml+ htmlcode
		document.getElementById("word").innerHTML=wordhtml;
	}
}