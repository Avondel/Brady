function myFunction(){
	alert("Kitty!");
}

function checkWorkA(){

	var score=0;
	var wrong = '';
	var correct=0;
	var msg = '';
	var x = document.getElementsByName('a1');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 2){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="1 ";
	correct = 0;		
x = document.getElementsByName('a2');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 0){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="2 ";
	correct = 0;		
x = document.getElementsByName('a3');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 2){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="3 ";
	correct = 0;		
x = document.getElementsByName('a4');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 0){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="4 ";
	correct = 0;		
x = document.getElementsByName('a5');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 3){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="5 ";
	correct = 0;		
x = document.getElementsByName('a6');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 1){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="6 ";
	correct = 0;		
x = document.getElementsByName('a7');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 0){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="7 ";
	correct = 0;		
x = document.getElementsByName('a8');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 3){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="8 ";
	correct = 0;		
x = document.getElementsByName('a9');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 0){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="9 ";
	correct = 0;		
x = document.getElementsByName('a10');    
	for(i = 0; i < x.length; i++)
      if(x[i].checked && i === 1){
			score++;
			correct=1;
		}
	if( correct === 0)
		wrong+="10";
	correct = 0;		

	msg = "Wrong numbers: "+wrong+"\nScore: "+score;
	alert(msg);

}

function checkWorkB(){
	alert("Honey says: To be completed.");
}

function Ex1(){
	var msg;
	msg = "Gregarious means \" living in groups \"\nLocusts live in groups.\nOf the animals listed only the spider is solitary.";
	alert(msg);
}

function Ex2(){
	var msg;
	msg = "Limpid means translucent or letting light through.\nFoggy is the opposite of limpid, but it is the same as opaque.\n";
	msg+= "We want a word meaning the same as limpid. This word is \"clear\"."
	alert(msg);
}

function Ex3(){
	var msg;
	msg = "Shaven is the opposite of frutescent, which means bushy.\nWe are looking for an opposite of fresh.\n";
	msg+="This word is mouldy";
	alert(msg);
}

function Ex4(){
	var msg;
	msg = "Ephemeral means lasting only for a day.\nSo enduring means the same as lasting.";
	alert(msg);
}

function Ex5(){
	var msg;
	msg = "Tantalus was a mythical figure who was known for punishment.\Hercules was known for strength.\n";
	msg+= "Apollo was a god and had nothing to do with punishment.\nAtlas was known for holding the Earth.";
	alert(msg);
}

function Ex6(){
	var msg;
	msg="There does not seem to be any relation between any of these words.\n";
	msg+="That is a good indicator that it may have something to do with the letters themselves.\n";
	msg+="In this case, the vowels in facecious and abstemious both occur in the same order.\n";
	msg+="Cooper and woolen both have the same vowel order.";
	alert(msg);
}

function Ex7(){
	var msg;
	msg="Grow means to expand. Attenuate means to shrink."
	alert(msg);
}

function Ex8(){
	var msg;
	msg="Ersatz means fake.\nReality does not mean performed. Play is a noun, not an adjective.\n";
	msg+="Theatrical does not have the same relation to performed as ersatz has to fake.\n";
	msg+="The answer is Acted."
	alert(msg);
}

function Ex9(){
	var msg;
	msg="A traffic light makes a car stop.\nAvast makes a pirate stop.\n";
	msg+="Ever hear \"Avast, me hearties!\"?";
	alert(msg);
}

function Ex10(){
	var msg;
	msg="Seriously?\nA triangle has three sides. A rhombus has four.";
	alert(msg);
}


function checkWork(){
		var score = 0;
		var wrong = "";
		var msg;
		var ans;
		ans=document.getElementById("a1").value;
		if (ans !="j")
			wrong +="1 ";
		else
			score++;
		ans=document.getElementById("a2").value;
		if (ans !="g")
			wrong +="2 ";
		else
			score++;
		ans=document.getElementById("a3").value;
		if (ans !="a")
			wrong +="3 ";
		else
			score++;
		ans=document.getElementById("a4").value;
		if (ans !="i")
			wrong +="4 ";
		else
			score++;
		ans=document.getElementById("a5").value;
		if (ans !="h")
			wrong +="5 ";
		else
			score++;
		ans=document.getElementById("a6").value;
		if (ans !="c")
			wrong +="6 ";
		else
			score++;
		ans=document.getElementById("a7").value;
		if (ans !="b")
			wrong +="7 ";
		else
			score++;
		ans=document.getElementById("a8").value;
		if (ans !="e")
			wrong +="8 ";
		else
			score++;
		ans=document.getElementById("a9").value;
		if (ans !="d")
			wrong +="9 ";
		else
			score++;
		ans=document.getElementById("a10").value;
		if (ans !="f")
			wrong +="10 ";
		else
			score++;
		msg = "Wrong numbers: "+wrong+"\nScore: "+score;
		alert(msg);
}