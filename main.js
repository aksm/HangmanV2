var inquirer = require("inquirer");
var game = require("./game.js");
var currentGame;

var guess = function() {
	currentGame.display();
	inquirer.prompt([{
		type: "input",
		name: "guessLetter",
		message: "Guess a letter.",
		validate: function(str) {
			return str.length === 1;
		}
	}]).then(function(answer) {
		if(currentGame.guess(answer.guessLetter)) {
			currentGame.display();
			console.log("YOU WIN!");
		} else if (currentGame.guessCounter === 0) {
			console.log("YOU LOSE :("+"\n");
			console.log("The word was "+currentGame.word.join("")+"\n");
		} else {
			guess();
		}
	});
};

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