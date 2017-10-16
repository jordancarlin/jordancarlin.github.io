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

