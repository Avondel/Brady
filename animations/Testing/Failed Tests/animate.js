
function startFunction(){
	//document.getElementById("myBox").addEventListener("click", translateX('myBox',300,3000));
	//	`document.getElementById("yourBox").addEventListener("click", translateY);
	
}
var whiteRabbit = document.getElementById("myBox");
var blackRabbit = document.getElementById("yourBox");
var blueRabbit = document.getElementById("hisBox");

var rabbitAcrossKeyframes = new KeyframeEffect(
	whiteRabbit,
	[
		{ transform: 'translateX(0%)' },
		{ transform: 'translateX(100%)' }
	],
	{ duration: 3000, fill: 'forwards' }
  );

var rabbitDownKeyframes = new KeyframeEffect(
    blackRabbit, 
    [
      { transform: 'translateY(0%)' }, 
      { transform: 'translateY(100%)' }
    ], 
    { duration: 3000, fill: 'forwards' }
  );
  
  var rabbitBlueKeyframes = new KeyframeEffect(
	blueRabbit,
	[
		{ transform: 'translateX(0%)' },
		{transform: 'translateY(0%)'},
		{ transform: 'translateX(100%)'},
		{ transform: 'translateaY(100%)'}
	],
	{duration: 3000, fill: 'forwards'}
 );
  

var rabbitAcrossAnimation = new Animation(rabbitAcrossKeyframes, document.timeline);
var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
var rabbitDiagAnimation = new Animation(rabbitBlueKeyframes, document.timeline);

// On tap or click,
whiteRabbit.addEventListener("mousedown", acrossHeGoes, false);
whiteRabbit.addEventListener("touchstart", acrossHeGoes, false);
blackRabbit.addEventListener("mousedown", downHeGoes, false);
blackRabbit.addEventListener("touchstart", downHeGoes, false);
blueRabbit.addEventListener("mousedown",diagHeGoes, false);
blueRabbit.addEventListener("touchstart", diagHeGoes, false);

function acrossHeGoes(event){
	whiteRabbit.removeEventListener("mousedown", acrossHeGoes, false);
	whiteRabbit.removeEventListener("touchstart", acrossHeGoes, false);
	rabbitAcrossAnimation.play();

}

function diagHeGoes(event){
	blueRabbit.removeEventListener("mousedown", diagHeGoes, false);
	blueRabbit.removeEventListener("touchstart", diagHeGoes, false);
	rabbitDiagAnimation.play();
}
rabbitAcrossAnimation.onfinish = downHeGoes;
rabbitDownAnimation.onfinish = diagHeGoes;

// Trigger a single-fire animation
function downHeGoes(event) {

  // Remove those event listeners
  blackRabbit.removeEventListener("mousedown", downHeGoes, false);
  blackRabbit.removeEventListener("touchstart", downHeGoes, false);  

  // Play rabbit animation
  rabbitDownAnimation.play();
    
}