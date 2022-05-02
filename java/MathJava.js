function ListChildren(id){
	
	mol=document.getElementById(id);
	var c = mol.children;
	var txt = "";
	var i;
	var cnt = 0;
	if(c.length===0)
		txt = "no children";
	else
		for (i = 0; i < c.length; i++) {
			txt = txt + c[i].tagName + c[i].id+"<br>";
			cnt++;
	}
	//document.getElementById("data").innerHTML = txt;
	alert(txt);
}


function openCity(evt, cityName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {		//Erase former content and reset formatting
   tabcontent[i].style.display = "none";
 
  }
  mathLinks = document.getElementsByClassName("mathLinks");

   for (i = 0; i < mathLinks.length; i++) {
		mathLinks[i].className = mathLinks[i].className.replace(" active", "");
		mathLinks[i].style.backgroundColor = 'blue';
  }
  
  document.getElementById(cityName).style.display = "block";
	document.getElementById(cityName).style.left = "0px";//display the current content

  evt.currentTarget.className += " active";
	 evt.currentTarget.style.backgroundColor = 'red';
}

function animation1(parent){

	parentEl = document.getElementById(parent);
	numTop = document.createElement("SPAN");
	numTop.setAttribute("class", "numbers");
	numTop.innerHTML = "2";
	numTop.style.top = "270px";
	numTop.style.left = "480px";
	numBottom = document.createElement("SPAN");
	numBottom.setAttribute("class", "numbers");
	numBottom.innerHTML = "4";
	numBottom.style.color = "red";
	numBottom.style.top = "310px";
	numBottom.style.left = "480px";
	fracLine = document.createElement("SPAN");
	fracLine.innerHTML = "_";
	fracLine.setAttribute("class","fracLine");
	fracLine.style.top = "252px";
	fracLine.style.left = "477px";
	
	while(parentEl.lastChild && parentEl.lastChild.nodeName != "BUTTON"){
		//alert(parentEl.lastChild.nodeName);
		parentEl.removeChild(parentEl.lastChild);
	}

	document.getElementById("animation1").appendChild(numTop);
	document.getElementById("animation1").appendChild(fracLine);
	document.getElementById("animation1").appendChild(numBottom);
}
