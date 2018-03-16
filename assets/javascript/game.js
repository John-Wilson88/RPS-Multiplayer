 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuf6z6vMragqFt45ek_f5KmGMzi8ogH4o",
    authDomain: "rps-multiplayer-4131f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-4131f.firebaseio.com",
    projectId: "rps-multiplayer-4131f",
    storageBucket: "rps-multiplayer-4131f.appspot.com",
    messagingSenderId: "406959876570"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var player = {
  	playerOne: {
  		name: " ",
  		wins: 0,
  		loses: 0,
  		choice: " "
  	},
  	playerTwo: {
  		name: " ",
  		wins: 0,
  		loses: 0,
  		choice: " "
  	} 
  };


$(".init-player").on("click", function(event) {
	event.preventDefault();

	if (player.playerOne.name === " ") {
		var playerOneName = $(".player-name").val().trim();
		player.playerOne.name = playerOneName;

		displayPlayerOne(playerOneName);
		//$(".search").html("welcome " + playerOneName);
		

	}
	else if (player.playerTwo.name === " ") {
		var playerTwoName = $(".player-name").val().trim();
		player.playerTwo.name = playerTwoName;

		displayPlayerTwo(playerTwoName);
		//$(".search").html("welcome " + playerTwoName);

	}
	
	database.ref().set({
		player: player
 
	});
});
 
// function that displays the first players name, move options, and number of wins and losses.
function displayPlayerOne(x) {

	$(".player-one").empty();

	var playerHeading = $("<h3>");
	playerHeading.addClass("pH");
	playerHeading.text(x);
	$(".player-one").append(playerHeading);

	var rocksBtn = $("<button>");
	rocksBtn.addClass("plyOneBtn");
	rocksBtn.attr("value", "r");
	rocksBtn.text("ROCK");
	$(".player-one").append(rocksBtn);

	var paperBtn = $("<button>");
	paperBtn.addClass("plyOneBtn");
	paperBtn.attr("value", "p");
	paperBtn.text("PAPER");
	$(".player-one").append(paperBtn);

	var scissorsBtn = $("<button>");
	scissorsBtn.addClass("plyOneBtn");
	scissorsBtn.attr("value", "s");
	scissorsBtn.text("SCISSORS");
	$(".player-one").append(scissorsBtn);
}

function displayPlayerTwo(x) {

	$(".player-two").empty();

	var playerHeading = $("<h3>");
	playerHeading.addClass("pH");
	playerHeading.text(x);
	$(".player-two").append(playerHeading);

	var rocksBtn = $("<button>");
	rocksBtn.addClass("plyTwoBtn");
	rocksBtn.attr("value", "r");
	rocksBtn.text("ROCK");
	$(".player-two").append(rocksBtn);

	var paperBtn = $("<button>");
	paperBtn.addClass("plyTwoBtn");
	paperBtn.attr("value", "p");
	paperBtn.text("PAPER");
	$(".player-two").append(paperBtn);

	var scissorsBtn = $("<button>");
	scissorsBtn.addClass("plyTwoBtn");
	scissorsBtn.attr("value", "s");
	scissorsBtn.text("SCISSORS");
	$(".player-two").append(scissorsBtn);
}

// functions that assign values to playerOne.choice and playerTwo.choice.

$(document).on("click", ".plyOneBtn", function() {
	var pOneChoice = $(this).val();
	player.playerOne.choice = pOneChoice;
	$(".player-one").html("<p> waiting for other player </p>");
	//console.log(player.playerOne.choice);
});

$(document).on("click", ".plyTwoBtn", function() {
	var pTwoChoice = $(this).val();
	player.playerTwo.choice = pTwoChoice;
	$(".player-two").html("<p> waiting for other player </p>");
	//console.log(player.playerTwo.choice);
	rockPaperScissors();
});

function rockPaperScissors() {
	//if (player.playerTwo.choice !== " " && player.playerOne.choice !== " ") {

		var PlyOneCho = player.playerOne.choice;
		var PlyTwoCho = player.playerTwo.choice;
		var playerOneName = player.playerOne.name
		var playerTwoName = player.playerTwo.name

		if ( (PlyOneCho === "r" && PlyTwoCho === "s") || (PlyOneCho === "p" && PlyTwoCho === "r") || (PlyOneCho === "s" && PlyTwoCho === "p") ) {
			player.playerOne.wins = player.playerOne.wins + 1;
			player.playerTwo.loses = player.playerTwo.loses + 1;

			displayPlayerOne(playerOneName);
			displayPlayerTwo(playerTwoName);
			//Display scores
			console.log("one wins " + player.playerOne.wins);
			console.log("two loses " + player.playerTwo.loses);

		}
		else if ( (PlyTwoCho === "r" && PlyOneCho === "s") || (PlyTwoCho === "p" && PlyOneCho === "r") || (PlyTwoCho === "s" && PlyOneCho === "p") ) {
			player.playerTwo.wins = player.playerTwo.wins + 1;
			player.playerOne.loses = player.playerOne.loses + 1;

			displayPlayerOne(playerOneName);
			displayPlayerTwo(playerTwoName);
			//Display scores
			console.log("two wins " + player.playerTwo.wins);
			console.log("one loses " + player.playerOne.loses);		
		}

		else {
			displayPlayerOne(playerOneName);
			displayPlayerTwo(playerTwoName);
		}
	//}

}












