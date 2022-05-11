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

function pause(e){
	curBut = document.getElementById(e.target.id);
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

function listStyles(el){
	var styles = window.getComputedStyle(el);
	var styleList = "";
	for(var i = 0; i < 347; i = i + 1){
		styleList+=i + " " +styles[i]+"<br>";
	}
}

function restart1(){
	document.getElementById("testing").innerHTML = "";
	alert(curEl);
	var styles = window.getComputedStyle(curEl);
	var styleList = "";
	for(var i = 0; i < 347; i = i + 1){
		styleList+=i + " " +styles[i]+"<br>";
	}
	alert(styleList);
	alert(styles[10]);
	start1(true);
}

async function play2() {

  //document.querySelector("#minimize").innerText = "maximize";
  await animate(box1, "moveLeft");
  await animate(box2, "moveDown");
  await animate(box3, "moveDiag");
  await animate(box4, "moveSpiral");
}

async function start1(restarted){

	var startTop, startBottom, factor, ansTop, ansBottom;
	var startTopEl, startBottomEl, factorEl, ansTopEl, ansBottomEl, lineEl_1, lineEl_2;
	var testArea = document.getElementById("testing1");
	document.getElementById("restart1").disabled = false;
	testArea.innerHTML = "";
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
	inst1.setAttribute("class", "inst first");
	inst1.style.opacity = "100%";
	inst1.innerHTML = inst_arr[1];
	
	inst2 = document.createElement("span");
	inst2.setAttribute("class", "inst first");
	inst2.style.width = "100px";
	inst2.innerHTML = factor + inst_arr[2];
	
	inst3 = document.createElement("span");
	inst3.setAttribute("class", "inst first");
	inst3.innerHTML = "Set up two division problems.";
	
	inst4 = document.createElement("span");
	inst4.setAttribute("class", "inst first");
	inst4.innerHTML = inst_arr[4];
	
	inst5 = document.createElement("span");
	inst5.setAttribute("class", "inst first");
	inst5.innerHTML = inst_arr[5];
	
	inst6 = document.createElement("span");
	inst6.setAttribute("class", "inst first");
	inst6.innerHTML = inst_arr[6];
	
	inst7 = document.createElement("span");
	inst7.setAttribute("class","inst first");
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
	

	//******Begin Animation******//
	testArea.appendChild(inst0);
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

async function start2(e){
	var startTop, startBottom, factor, ansTop, ansBottom, primeFactTop, primeFactBottom;
	var startTopEl, startBottomEl, factorEl, ansTopEl, ansBottomEl, lineEl_1, lineEl_2;
	var testArea1 = document.getElementById("testing2");
	var calcWidth = 0;
	var lineWidth = 0;
	var newLeft;
	var crossOutTopLeft=0;
	var crossOutBottomLeft=0;
	document.getElementById("restart1").disabled = false;
	testArea1.innerHTML = "";
	var inst_arr = [];
	var trackBottomFact = [];
	var trackTopFact = [];
	inst_arr[0] = "Reduce this fraction to lowest terms using cancellation....";
	inst_arr[1] = "First: Find the prime factorization....";
	inst_arr[2] = "Second: Cross out the numbers that are the same on top and the bottom";
	inst_arr[3] = "Start with: ";
	inst_arr[4] = "...then: ";
	inst_arr[5] = "...and: ";
	inst_arr[6] = "You only get to cross out number for number";
	inst_arr[7] = "Multiply any numbers remaining...";
	inst_arr[8] = "Write down the answers...";
	inst_arr[9] = "Draw a fraction line...";
	inst_arr[10] = "You are done!";
	
	numTop = Math.floor(Math.random()*6+1);
	numBottom = Math.floor(numTop + Math.random()*6+1);
	factor = findGCF(numTop, numBottom);
	numTop = numTop/factor;
	numBottom = numBottom/factor;
	factor = Math.floor(Math.random()*5 + 2);
	startTop = numTop * factor;
	startBottom = numBottom * factor;
	primeFactTop = primeFactorization(startTop);
	primeFactBottom = primeFactorization(startBottom);

	inst01 = document.createElement("span");
	inst01.setAttribute("class", "inst second");
	inst01.style.top = "20px";
	inst01.style.left = "10px";
	inst01.style.opacity = "0%";
	inst01.innerHTML = inst_arr[0];

	inst1 = document.createElement("span");
	inst1.setAttribute("class", "inst second");
	inst1.style.opacity = "100%";
	inst1.innerHTML = inst_arr[1];
	
	inst2 = document.createElement("span");
	inst2.setAttribute("class", "inst second");
	inst2.innerHTML = inst_arr[2];
	
	inst3 = document.createElement("span");
	inst3.setAttribute("class", "inst second");
	inst3.innerHTML = "Set up two division problems.";
	
	inst4 = document.createElement("span");
	inst4.setAttribute("class", "inst first");
	inst4.innerHTML = inst_arr[4];
	
	inst5 = document.createElement("span");
	inst5.setAttribute("class", "inst second");
	inst5.innerHTML = inst_arr[5];
	
	inst6 = document.createElement("span");
	inst6.setAttribute("class", "inst second");
	inst6.innerHTML = inst_arr[6];
	
	inst7 = document.createElement("span");
	inst7.setAttribute("class","inst second");
	inst7.innerHTML = inst_arr[7];
	
	inst8 = document.createElement("span");
	inst8.setAttribute("class","inst second");
	inst8.innerHTML = inst_arr[8];
	
	inst9 = document.createElement("span");
	inst9.setAttribute("class","inst second");
	inst9.innerHTML = inst_arr[9];
	
	inst10 = document.createElement("span");
	inst10.setAttribute("class","inst second");
	inst10.innerHTML = inst_arr[10];

	startTopEl = document.createElement("span");
	startBottomEl = document.createElement("span");
	startTopEl.setAttribute("class", "numbers");
	startTopEl.setAttribute("id","numTopId");
	startTopEl.innerHTML = startTop;
	
	startBottomEl.setAttribute("class", "numbers");
	startBottomEl.setAttribute("id", "numBottomId");
	startBottomEl.innerHTML = startBottom;
	startBottomEl.style.top = "50px";
	
	lineEl_1 = document.createElement("span");
	lineEl_1.setAttribute("class", "fracLine");
	lineEl_1.setAttribute("id", "line1");
	lineEl_1.style.top = "40px";
	
	startFraction = document.createElement("span");
	startFraction.setAttribute("class","frac");
	startFraction.appendChild(startTopEl);
	startFraction.appendChild(lineEl_1);
	startFraction.appendChild(startBottomEl);
	startFraction.style.opacity = "0%";
	startFraction.style.top = "120px";
	startFraction.style.left = "10px";
	startFraction.style.position = "absolute";
	lineEl_1.style.transform = "rotate(0deg)";	
	
	equalTop = document.createElement("span");
	equalTop.setAttribute("class", "numbers");
	equalTop.style.top = "135px";
	equalTop.style.left = "60px";
	equalTop.innerHTML = "=";
	
	equalBottom = document.createElement("span");
	equalBottom.setAttribute("class", "numbers");
	equalBottom.style.top = "165px";
	equalBottom.style.left = "60px";
	equalBottom.innerHTML = "=";
	
	primeTop = document.createElement("span");
	primeTop.setAttribute("class", "numbers");
	primeTop.style.top = "120px";
	primeTop.style.left = "100px";
	primeTop.style.opacity = "100%";
	calcWidth = 25;
	primeTop.innerHTML = primeFactTop[0];
	for(var i = 1; i<primeFactTop.length; i++){
		primeTop.innerHTML += " x " + primeFactTop[i];
		calcWidth += 45;
		if(primeFactTop[i]>9)
			calcWidth += 5;
	}
	primeTop.style.width = calcWidth + "px";
	lineWidth  = calcWidth;
	
	primeBottom = document.createElement("span");
	primeBottom.setAttribute("class", "numbers");
	primeBottom.style.top = "170px";
	primeBottom.style.left = "100px";
	calcWidth = 25;
	primeBottom.innerHTML = primeFactBottom[0];
	for(var i = 1; i<primeFactBottom.length; i++){
		primeBottom.innerHTML += " x " + primeFactBottom[i];
		calcWidth += 45;
		if(primeFactBottom[i]>9)
			calcWidth += 5;
	}
	primeBottom.style.width = calcWidth + "px";
	if(calcWidth > lineWidth)
		lineWidth = calcWidth;
	
	lineEl_2 = document.createElement("span");
	lineEl_2.setAttribute("class", "fracLine");
	lineEl_2.setAttribute("id", "line2");
	lineEl_2.style.top = "160px";
	lineEl_2.style.left = "100px";
	lineEl_2.style.width = lineWidth + "px";
	
	newLeft = 100 + lineWidth + 20;
	inst1.style.left = newLeft + "px";
	inst2.style.left = newLeft + "px";
	inst3.style.left = newLeft + "px";
	inst4.style.left = newLeft + "px";
	inst5.style.left = newLeft + "px";
	
	//animation
	testArea1.appendChild(inst01);
	await animate(inst01,"fadeIn");
	testArea1.appendChild(startFraction);
	await animate(startFraction,"fadeIn");
	testArea1.appendChild(equalTop);
	testArea1.appendChild(equalBottom);
	await animate(equalBottom, "hold");

	crossOutTopLeft = 90;
//	crossOutTop = document.createElement("span");
//	crossOutTop.setAttribute("class", "crossOut");
//	crossOutTop.style.left=crossOutTopLeft + "px";
//	crossOutTop.style.top = "135px";
	testArea1.appendChild(inst1);
	await animate(inst1, "hold");
	testArea1.appendChild(primeTop);
	await animate(primeTop, "hold");
	testArea1.appendChild(primeBottom);
	await animate(primeBottom, "hold");
	testArea1.appendChild(lineEl_2);

	inst1.classList.remove("hold");
	await animate(inst1, "fadeOut");
	testArea1.appendChild(inst2);
	await animate(inst2, "hold");
	for( var i = 0; i<primeFactTop.length; i++){
		crossOutBottomLeft = 90;
		for( var j=0; j<primeFactBottom.length; j++){
			if(primeFactTop[i]==primeFactBottom[j] && trackBottomFact[j]!= 1){
				trackTopFact[i] = 1;
				trackBottomFact[j] = 1;
				crossOut1 = document.createElement("span");
				crossOut1.setAttribute("class", "crossOut");
				crossOut1.style.top = "135px";
				crossOut1.style.left= crossOutTopLeft + "px";
				crossOut2 = document.createElement("span");
				crossOut2.setAttribute("class", "crossOut");
				crossOut2.style.top = "185px";
				crossOut2.style.left = crossOutBottomLeft + "px";
				testArea1.appendChild(crossOut1);
				testArea1.appendChild(crossOut2);
				await animate(crossOut2, "hold");
				break;
				}
				crossOutBottomLeft += 42;
		}
		crossOutTopLeft += 42;
	}
	inst2.classList.remove("hold");
	await animate(inst2, "fadeOut");
	inst7.style.left = lineWidth + 300 + "px";
	testArea1.appendChild(inst7);
	await animate(inst7, "hold");
	
	equalTop = document.createElement("span");
	equalTop.setAttribute("class", "numbers");
	equalTop.style.top = "125px";
	equalTop.style.left = lineWidth + 130 + "px";
	equalTop.innerHTML = "=";
	
	equalBottom = document.createElement("span");
	equalBottom.setAttribute("class", "numbers");
	equalBottom.style.top = "170px";
	equalBottom.style.left = lineWidth + 130 + "px";
	equalBottom.innerHTML = "=";
	//await animate(equalBottom, "hold");
	
	testArea1.appendChild(equalTop);
	testArea1.appendChild(equalBottom);
	
	ansTop = 1;
	ansBottom = 1;
	for(var i=0; i<primeFactTop.length; i++){
		if(trackTopFact[i]!=1)
			ansTop = ansTop * primeFactTop[i];
	}
	for(var i=0; i<primeFactBottom.length; i++){
		if(trackBottomFact[i]!=1)
			ansBottom = ansBottom * primeFactBottom[i];
	}
	ansTopEl = document.createElement("span");
	ansTopEl.setAttribute("class", "numbers");
	ansTopEl.style.top = "120px";
	ansTopEl.style.left = lineWidth + 190 + "px";
	ansTopEl.innerHTML = ansTop;
	
	ansBottomEl = document.createElement("span");
	ansBottomEl.setAttribute("class", "numbers");
	ansBottomEl.style.top = "170px";
	ansBottomEl.style.left = lineWidth + 190 +"px";
	ansBottomEl.innerHTML = ansBottom;
	
	testArea1.appendChild(ansTopEl);
	await animate(ansTopEl, "hold");
	testArea1.appendChild(ansBottomEl);
	await animate(ansBottomEl, "hold");
	
	inst7.classList.remove("hold");
	await animate(inst7, "fadeOut");
	inst9.style.left = lineWidth + 300 + "px";
	testArea1.appendChild(inst9);
	await animate(inst9, "hold");
	
	lineEl_1 = document.createElement("span");
	lineEl_1.setAttribute("class", "fracLine");
	lineEl_1.setAttribute("id", "line1");
	lineEl_1.style.top = "160px";
	lineEl_1.style.left = calcWidth + 190 +"px";
	testArea1.appendChild(lineEl_1);
	
	inst9.classList.remove("hold");
	await animate(inst9, "fadeOut");
	inst10.style.left = calcWidth + 300 +"px";
	testArea1.appendChild(inst10);

	
	

	
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

function primeFactorization(num){
	var ansArr = [];
	var j = 0;
	const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
	var txt = num;
	for (var i = 0; i<9; i++){
		while(!(num%primes[i])){
			ansArr[j] = primes[i];
			num = num/primes[i];
			j++;
		}
	}
	return ansArr;
}

