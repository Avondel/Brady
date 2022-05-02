
function startFunction(){
	//document.getElementById("myBox").addEventListener("click", translateX('myBox',300,3000));
	//	`document.getElementById("yourBox").addEventListener("click", translateY);
	
}

const element = document.getElementById('some-element-you-want-to-animate');
let start, previousTimeStamp;
let done = false

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
    }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = 'translateX(' + count + 'px)';
    if (count === 200) done = true;
  }

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    previousTimeStamp = timestamp
    !done && window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

/*function translateX(id, end, time){
	el = document.getElementById(id);
	start = el.offsetLeft;
	diff = end - start;
	timeIntervals = time/60;
	xIntervals = diff / timeIntervals;
	var cnt = 0;

var adiv = document.getElementById('myBox')
var starttime
 
function moveit(timestamp, el, dist, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp || new Date().getTime()
    var runtime = timestamp - starttime
    var progress = runtime / duration
    progress = Math.min(progress, 1)
    el.style.left = (dist * progress).toFixed(2) + 'px'
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
            moveit(timestamp, el, dist, duration)
        })
    }
}
 
requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
    moveit(timestamp, adiv, 400, 2000) // 400px over 1 second
})

}*/

	
function translateY(id, end, time){
	alert("Vertical Kitty!");
}

/*var whiteRabbit = document.getElementById("myBox");
var blackRabbit = document.getElementById("yourBox");

var rabbitDownKeyframes = new KeyframeEffect(
    whiteRabbit, 
    [
      { transform: 'translateX(0%)' }, 
      { transform: 'translateX(100%)' }
    ], 
    { duration: 3000, fill: 'forwards' }
  );
  
var blackRabbitKeyframes = new KeyframeEffect(
	blackRabbit,
	[
		{transform: 'translateY(0%)' },
		{transform: 'translateY(100%)' }
	],
	{duration: 3000, fill: 'forwards' }
   );

var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
var blackRabbitAnimation = new Animation(blackRabbitKeyframes, document.timeline);

// On tap or click,
whiteRabbit.addEventListener("mousedown", downHeGoes, false);
whiteRabbit.addEventListener("touchstart", downHeGoes, false);
blackRabbit.addEventListener("mousedown", blackRabbitDown, false);
blackRabbit.addEventListener("touchstart", blackRabbitDown, false);

// Trigger a single-fire animation
function downHeGoes(event) {

  // Remove those event listeners
  whiteRabbit.removeEventListener("mousedown", downHeGoes, false);
  whiteRabbit.removeEventListener("touchstart", downHeGoes, false);  

  // Play rabbit animation
  rabbitDownAnimation.play();
    
}

function blackRabbitDown(event){
	blackRabbit.removeEventListener("mousedown", blackRabbitDown, false);
	blackRabbit.removeEventListener("touchstart", blackRabbitDown, false);
	blackRabbitAnimation.play();
}*/
