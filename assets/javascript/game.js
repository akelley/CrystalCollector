var ruby = 0;
var sapphire = 0;
var topaz = 0;
var emerald = 0;

var wins = 0;
var losses = 0;
var score = 0;
var random = Math.floor(Math.random() * 101) + 19;

function setGemValues(){
	ruby = Math.floor(Math.random() * 12) + 1;
	
	sapphire = Math.floor(Math.random() * 12) + 1;
	while(sapphire == ruby){
		sapphire = Math.floor(Math.random() * 12) + 1;
	}

	topaz = Math.floor(Math.random() * 12) + 1;
	while(topaz == sapphire || topaz == ruby){
		topaz = Math.floor(Math.random() * 12) + 1;
	}

	emerald = Math.floor(Math.random() * 12) + 1;
	while(emerald == sapphire || emerald == ruby || emerald == topaz){
		emerald = Math.floor(Math.random() * 12) + 1;
	}
}

function winning(){
	wins++;
	$(".scoreboard").html("Wins:&nbsp;&nbsp;" + wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + losses);
	
	score = 0;
	$(".score").text(score);
	random = Math.floor(Math.random() * 101) + 19;
	$(".random").text(random);
	setGemValues();
}

function losing(){
	losses++;
	$(".scoreboard").html("Wins:&nbsp;&nbsp;" + wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + losses);
	score = 0;
	$(".score").text(score);
	random = Math.floor(Math.random() * 101) + 19;
	$(".random").text(random);
	setGemValues();
}

$(document).ready(function(){
	setGemValues();

	$(".score").text(score);
	$(".random").text(random);
	$(".scoreboard").html("Wins:&nbsp;&nbsp;" + wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + losses);

	if(score < random){
		$(".ruby").on("click", function(){
			score += ruby;
			$(".score").text(score);
			
			if(score == random){
				winning();
			}

			if(score > random){
				losing();
			}
		})

		$(".sapphire").on("click", function(){
			score += sapphire;
			$(".score").text(score);

			if(score == random){
				winning();
			}

			if(score > random){
				losing();
			}
		})

		$(".topaz").on("click", function(){
			score += topaz;
			$(".score").text(score);

			if(score == random){
				winning();
			}

			if(score > random){
				losing();
			}
		})

		$(".emerald").on("click", function(){
			score += emerald;
			$(".score").text(score);

			if(score == random){
				winning();
			}

			if(score > random){
				losing();
			}
		})
	}
})