var curEl;
var runs = true;

// common function to apply one transition rule
function transition(elem, styleProps) {
  return new Promise((resolve, reject) => {
    function handleTransitionEnd() {
      console.log("Transition Ended...");
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    Object.entries(styleProps).forEach(([prop, value]) => {
      elem.style.setProperty(prop, value);
    });
  });
}

// common function to apply animations to an element.
function animate(elem, animation) {
  return new Promise((resolve, reject) => {
	 curEl = elem; 
    function handleAnimationEnd() {
		resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    elem.classList.add(animation);
  });
}

/*function animate(elem, animation) {
  return new Promise((resolve, reject) => {
	 curEl = elem; 
    function handleAnimationEnd() {
      console.log("animation ended...");
      resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    elem.classList.add(animation);
  });
}*/

function pause(e){
	curBut = document.getElementById("pause");
	if(runs == true){
		curEl.style.animationPlayState = 'paused';		
		curBut.innerHTML = "Continue";
		runs = false;
	} else {
		curEl.style.animationPlayState = 'running';
		curBut.innerHTML = "Pause";
		runs = true;
	}
	
}

function restart(){
	var curDiv = document.getElementById("anim");
	curDiv.innerHTML = "";
	var box1 = document.createElement("div");
	var box2 = document.createElement("div");
	var box3 = document.createElement("div");
	var box4 = document.createElement("div");
	box1.setAttribute("class", "box");
	box1.setAttribute("id", "box1");
	curDiv.appendChild(box1);
	box2.setAttribute("class","box");
	box2.setAttribute("id","box2");
	curDiv.appendChild(box2);
	box3.setAttribute("class","box");
	box3.setAttribute("id","box3");
	curDiv.appendChild(box3);
	box4.setAttribute("class","box");
	box4.setAttribute("id","box4");
	curDiv.appendChild(box4);	
}

async function play2() {

  //document.querySelector("#minimize").innerText = "maximize";
  await animate(box1, "moveLeft");
  await animate(box2, "moveDown");
  await animate(box3, "moveDiag");
  await animate(box4, "moveSpiral");
}

async function start(){
	var startTop, startBottom, factor, ansTop, ansBottom;
	var startTopEl, startBottomEl, factorEl, ansTopEl, ansBottomEl, lineEl_1, lineEl_2;
	var testArea = document.getElementById("testing");
	var inst_arr = [];
	inst_arr[0] = "Reduce this fraction to lowest terms....";
	inst_arr[1] = "First: Find a common factor....";
	inst_arr[2] = " will<br>work.";
	inst_arr[3] = "Set up two division problems.";
	inst_arr[4] = "Solve each problem and <br>write the answer";
	inst_arr[5] = "Check for any other common factors...";
	inst_arr[6] = "Draw a fraction line...";
	inst_arr[7] = "You are done!";
	
	numTop = Math.floor(Math.random()*6+1);
	numBottom = Math.floor(numTop + Math.random()*6+1);
	factor = findGCF(numTop, numBottom);
	numTop = numTop/factor;
	numBottom = numBottom/factor;
	factor = Math.floor(Math.random()*5 + 2);
	startTop = numTop * factor;
	startBottom = numBottom * factor;
	
	startTopEl = document.createElement("span");
	startBottomEl = document.createElement("span");
	startTopEl.setAttribute("class", "numbers");
	startTopEl.setAttribute("id","numTopId");
	startTopEl.innerHTML = startTop;
	//startTopEl.style.top = "85px";
	//startTopEl.style.left = "10px"
	//startTopEl.style.position = "absolute";
	
	startBottomEl.setAttribute("class", "numbers");
	startBottomEl.setAttribute("id", "numBottomId");
	startBottomEl.innerHTML = startBottom;
	startBottomEl.style.top = "50px";
	//startBottomEl.style.left = "10px";
	//startBottomEl.style.position = "absolute";
	
	lineEl_1 = document.createElement("span");
	lineEl_1.setAttribute("class", "fracLine");
	lineEl_1.setAttribute("id", "line1");
	lineEl_1.style.top = "40px";
	//lineEl_1.style.left = "10px";
	//lineEl_1.style.position = "absolute";
	
	startFraction = document.createElement("span");
	startFraction.setAttribute("class","frac");
	startFraction.appendChild(startTopEl);
	startFraction.appendChild(lineEl_1);
	startFraction.appendChild(startBottomEl);
	startFraction.style.opacity = "0%";
	startFraction.style.top = "90px";
	startFraction.style.left = "10px";
	startFraction.style.position = "absolute";
	lineEl_1.style.transform = "rotate(0deg)";	

	inst0 = document.createElement("span");
	inst0.setAttribute("class", "inst");
	inst0.style.top = "20px";
	inst0.style.left = "10px";
	inst0.style.opacity = "100%";
	inst0.innerHTML = inst_arr[0];
	
	inst1 = document.createElement("span");
	inst1.setAttribute("class", "inst");
	inst1.style.opacity = "100%";
	inst1.innerHTML = inst_arr[1];
	
	inst2 = document.createElement("span");
	inst2.setAttribute("class", "inst");
	inst2.style.width = "100px";
	inst2.innerHTML = factor + inst_arr[2];
	
	inst3 = document.createElement("span");
	inst3.setAttribute("class", "inst");
	inst3.innerHTML = "Set up two division problems.";
	
	inst4 = document.createElement("span");
	inst4.setAttribute("class", "inst");
	inst4.innerHTML = inst_arr[4];
	
	inst5 = document.createElement("span");
	inst5.setAttribute("class", "inst");
	inst5.innerHTML = inst_arr[5];
	
	inst6 = document.createElement("span");
	inst6.setAttribute("class", "inst");
	inst6.innerHTML = inst_arr[6];
	
	inst7 = document.createElement("span");
	inst7.setAttribute("class","inst");
	inst7.innerHTML = inst_arr[7];
	
	symbol1 = document.createElement("span");
	symbol1.setAttribute("class","symbol");
	symbol1.innerHTML = "&#247";
	symbol1.style.top = "86px";
	symbol1.style.left = "55px";
	//symbol1.style.position = "absolute";
	
	symbol2 = document.createElement("span");
	symbol2.setAttribute("class", "symbol");
	symbol2.innerHTML = "&#247";
	symbol2.style.top = "135px";
	symbol2.style.left = "55px";
	//symbol2.style.position = "absolute";
	
	factorTop = document.createElement("span");
	factorTop.setAttribute("class","numbers");
	factorTop.style.top = "90px";
	factorTop.style.left = "85px"
	//factorTop.style.position = "absolute";
	factorTop.innerHTML = factor;
	
	factorBottom = document.createElement("span");
	factorBottom.setAttribute("class", "numbers");
	factorBottom.style.top = "140px";
	factorBottom.style.left = "85px";
	//factorBottom.style.position = "absolute";
	factorBottom.innerHTML = factor;
	
	equalTop = document.createElement("span");
	equalTop.setAttribute("class", "numbers");
	equalTop.style.top = "86px";
	equalTop.style.left = "120px";
	//equalTop.style.position = "absolute";
	equalTop.innerHTML = "=";
	
	equalBottom = document.createElement("span");
	equalBottom.setAttribute("class", "numbers");
	equalBottom.style.top = "135px";
	equalBottom.style.left = "120px";
	//equalBottom.style.position = "absolute";
	equalBottom.innerHTML = "=";
	
	ansTop = document.createElement("span");
	ansTop.setAttribute("class", "numbers");
	//ansTop.style.top = "90px";
	//ansTop.style.left = "160px";
	ansTop.innerHTML = numTop;
	
	ansBottom = document.createElement("span");
	ansBottom.setAttribute("class", "numbers");
	ansBottom.style.top = "50px";
	ansBottom.style.opacity = "0%";
	//ansBottom.style.left = "160px";
	ansBottom.innerHTML = numBottom;
	
	lineEl_2 = document.createElement("span");
	lineEl_2.setAttribute("class", "fracLine");
	lineEl_2.style.top = "40px";
	lineEl_2.style.opacity = "0%";
	//lineEl_2.style.left = "155px";
	//lineEl_2.style.position = "absolute";
	
	endFraction = document.createElement("span");
	endFraction.appendChild(ansTop);
	//endFraction.appendChild(lineEl_2);
	//endFraction.appendChild(ansBottom);
	endFraction.style.top = "90px";
	endFraction.style.left = "155px";
	endFraction.style.position = "absolute";
	endFraction.style.opacity = "0%";
	lineEl_2.style.transform = "rotate(0deg)";	
	
	//document.getElementById("testing").appendChild(startFraction);
	//startFraction.style.position = "absolute";
	//document.getElementById("testing").appendChild(symbol1);
	//document.getElementById("testing").appendChild(symbol2);
	
	//******Begin Animation******//
	testArea.appendChild(inst0);
	await animate(inst0, "fadeIn");
	testArea.appendChild(startFraction);
	await animate(startFraction, "fadeIn");
	testArea.appendChild(inst1);
	await animate(inst1, "hold");
	inst1.classList.remove("hold");
	await animate(inst1, "fadeOut");
	testArea.appendChild(inst2);
	await animate(inst2, "hold");
	inst2.classList.remove("hold");
	await animate(inst2, "fadeOut");
	testArea.appendChild(inst3);
	await animate(inst3,"hold");
	inst3.classList.remove("hold");
	testArea.appendChild(symbol1);
	testArea.appendChild(symbol2);
	await animate(symbol2, "hold");
	testArea.appendChild(factorTop);
	testArea.appendChild(factorBottom);
	await animate(factorBottom, "hold");
	testArea.appendChild(equalTop);
	testArea.appendChild(equalBottom);
	await animate(equalBottom, "hold");
	await animate(inst3, "fadeOut");
	testArea.appendChild(inst4);
	await animate(inst4,"hold");
	inst4.classList.remove("hold");
	testArea.appendChild(endFraction);
	await animate(endFraction,"fadeIn");
	endFraction.appendChild(ansBottom);
	await animate(ansBottom, "fadeIn");
	await animate(inst4, "fadeOut");
	testArea.appendChild(inst5);
	await animate(inst5,"hold");
	inst5.classList.remove("hold");
	await animate(inst5, "fadeOut");
	testArea.appendChild(inst6);
	await animate(inst6,"hold");
	endFraction.appendChild(lineEl_2);
	await animate(lineEl_2,"fadeIn");
	lineEl_2.style.opacity = "100%";
	lineEl_2.classList.remove("fadeIn");
	await animate(lineEl_2, "hold");
	inst6.classList.remove("hold");
	await animate(inst6, "fadeOut");
	testArea.appendChild(inst7);
	endFraction.style.opacity = "100%";
	endFraction.classList.remove("fadeIn");
	await animate(endFraction, "grow");
	
}


function findGCF(num1, num2){
	var factor;
	var i;
	var num1, num2;
	//num1 = parseInt(document.getElementById("numTop").value);
	//num2 = parseInt(document.getElementById("numBottom").value);
	if(num1 == num2)
		factor = num1;
	else if(num1 < num2)
		for(i=num1; i>0; i--){
			if(num1%i == 0 && num2%i == 0){
				factor = i;
				break;
			}
		}
	else
		for(i=num2; i>0; i--){
			if(num1%i == 0 && num2%i == 0){
				factor=i;
				break;
			}
		}
	//document.getElementById("GCFAnswer").innerHTML = factor;
	return factor;
}

