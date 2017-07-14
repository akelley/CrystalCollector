var game = {
	ruby: 0,
	sapphire: 0,
	topaz: 0,
	emerald: 0,

	wins: 0,
	losses: 0,
	score: 0,
	random: 0,

	setValues: function() {
		this.random = Math.floor(Math.random() * 101) + 19;
		$(".random").text(this.random);
		this.ruby = Math.floor(Math.random() * 12) + 1;
		
		this.sapphire = Math.floor(Math.random() * 12) + 1;
		while(this.sapphire == this.ruby){
			this.sapphire = Math.floor(Math.random() * 12) + 1;
		}

		this.topaz = Math.floor(Math.random() * 12) + 1;
		while(this.topaz == this.sapphire || this.topaz == this.ruby){
			this.topaz = Math.floor(Math.random() * 12) + 1;
		}

		this.emerald = Math.floor(Math.random() * 12) + 1;
		while(this.emerald == this.sapphire || this.emerald == this.ruby || this.emerald == this.topaz){
			this.emerald = Math.floor(Math.random() * 12) + 1;
		}
	},

	winning: function(){
		this.wins++;
		$(".scoreboard").html("Wins:&nbsp;&nbsp;" + this.wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + this.losses);	
		this.score = 0;
		$(".score").text(this.score);
		this.setValues();
	},

	losing: function(){
		this.losses++;
		$(".scoreboard").html("Wins:&nbsp;&nbsp;" + this.wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + this.losses);
		this.score = 0;
		$(".score").text(this.score);
		this.setValues();
	}
};

$(document).ready(function(){
	game.setValues();

	$(".score").text(game.score);
	$(".random").text(game.random);
	$(".scoreboard").html("Wins:&nbsp;&nbsp;" + game.wins + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses:&nbsp;&nbsp;" + game.losses);

	if(game.score < game.random){
		$(".ruby").on("click", function(){
			game.score += game.ruby;
			$(".score").text(game.score);
			
			if(game.score == game.random){
				game.winning();
			}

			if(game.score > game.random){
				game.losing();
			}
		})

		$(".sapphire").on("click", function(){
			game.score += game.sapphire;
			$(".score").text(game.score);

			if(game.score == game.random){
				game.winning();
			}

			if(game.score > game.random){
				game.losing();
			}
		})

		$(".topaz").on("click", function(){
			game.score += game.topaz;
			$(".score").text(game.score);

			if(game.score == game.random){
				game.winning();
			}

			if(game.score > game.random){
				game.losing();
			}
		})

		$(".emerald").on("click", function(){
			game.score += game.emerald;
			$(".score").text(game.score);

			if(game.score == game.random){
				game.winning();
			}

			if(game.score > game.random){
				game.losing();
			}
		})
	}
})