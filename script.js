// Player Names 

var namebtn = document.getElementById("getNames");
namebtn.addEventListener("click", getNames);

var name1 = document.getElementById("name1") ;
var name2 = document.getElementById("name2") ;

// Default Names 
var p1name = "Player 1";
var p2name = "Player 2";
function getNames() {
	p1name = prompt("Player 1 Name :");   		//Names stored
	p2name = prompt("Player 2 Name :");	
	name1.textContent = p1name;
	name2.textContent = p2name;
}

// Toggle Input Option
var score = document.getElementById("scoreLimit");
var scoreInput = document.querySelector("input");	// score limit input

score.addEventListener("click", function(){
   scoreInput.classList.toggle("hideshow");
});
scoreInput.addEventListener("mouseleave", function() {
	scoreInput.classList.add("hideshow");
});


// =============SCOREKEEPER JS=============

// span elements 
var p1Span = document.getElementById("p1Span");
var p2Span = document.getElementById("p2Span");
var limitSpan = document.getElementById("scoreLimit");

var winnerText = document.getElementById("winner");


var p1btn = document.getElementById("p1");			// player 1 button
var p2btn = document.getElementById("p2"); 			// player 2 button
var reset = document.getElementById("reset");		// reset button

var p1Score = 0 , p2Score = 0 ;						// Initial scores


gameOver = false;
scoreLimit = 5;

p1btn.addEventListener("click", function(){
	scoreKeeper(p1Score,p1Span,p1name);
	p1Score++;
});

p2btn.addEventListener("click", function(){
	scoreKeeper(p2Score,p2Span,p2name);
	p2Score++;
});

reset.addEventListener("click" , resetFunc);
scoreInput.addEventListener("change" , function(){
	resetFunc();
	changeLimit();
});

function scoreKeeper(score, span, name) {
	if(!gameOver){
		score++;
		if(score === scoreLimit) {
			span.classList.add("win");
			gameOver = true;
			// Optional
			winnerText.textContent = name + " wins!"; 
		}
		span.textContent = score;
	}
}

function changeLimit() {
	scoreLimit = Number(scoreInput.value);
	limitSpan.textContent = Number(scoreInput.value);
}

function resetFunc() {
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Span.textContent = "0";
	p2Span.textContent = "0";
	p1Span.classList.remove("win");
	p2Span.classList.remove("win");
}



// Increment p1Score when clicked
// p1btn.addEventListener("click", function(){
// 	if(!gameOver){
// 		p1Score++;
// 		if(p1Score === scoreLimitscoreI
// 			gameOver = true;
// 		p1Span.textContent = p1Score;
// 	}
// });
