function generateword (){
	var word = "dog";
	var htmlcode = "<div class='wordletters'></div>"
	var wordhtml = document.getElementById("word").innerHTML
	//i++ ----> i = i + 1
	for(var i = 0; i < word.length; i++){
		document.getElementById("word").innerHTML=wordhtml + htmlcode;
	}
}