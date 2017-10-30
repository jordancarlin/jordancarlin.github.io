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

function startgame(){

}

document.onkeypress = function(e) {
	e = e || window.event;
	//get letters html
	var lettersHTML = document.getElementById("char").innerHTML;
	//update html wiht new key pressed
	lettersHTML = lettersHTML + " " + String.fromCharCode(e.keyCode);
	//update html of char
	document.getElementById("char").innerHTML = lettersHTML;
	//check for duplicate letters
	listofletters[index] = String.fromCharCode(e.keyCode);
	index = index + 1;
};



function randomnumber(){
	return Math.floor(Math.random() * 10);
}	

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

