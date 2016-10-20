// load modules
var inquirer = require("inquirer");
var game = require("./game.js");

// initialize global variable for storing new game
var currentGame;

// inquirer prompt function for guessing
var guess = function() {
	currentGame.display("guess");
	inquirer.prompt([{
		type: "input",
		name: "guessLetter",
		message: "Guess a letter.",
		validate: function(str) {
			return str.length === 1;
		}
	}]).then(function(answer) {
		if(currentGame.guess(answer.guessLetter)) {
			currentGame.display("win");
		} else if (currentGame.guessCounter === 0) {
			currentGame.display("lose");
		} else {
			guess();
		}
	});
};

// Initial inquirer prompt to select difficulty
inquirer.prompt([{
	type: "list",
	name: "difficulty",
	message: "Choose a difficulty level.",
	choices: [
		"Easy",
		"Hard"
	]
}
]).then(function (answer) {
	currentGame = new game();
	currentGame.level(answer.difficulty);
	guess();
});