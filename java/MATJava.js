
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
  document.getElementById(cityName).style.display = "block";	//display the current content

  evt.currentTarget.className += " active";
	 evt.currentTarget.style.backgroundColor = 'red';
}
