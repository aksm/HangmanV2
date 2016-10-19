var inquirer = require("inquirer");
var getWord = require("./game.js");
var word;

var guess = function() {
	inquirer.prompt([{
		type: "input",
		name: "guessLetter",
		message: "Guess a letter."
	}]).then(function() {

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
]).then(function (answers) {
	word = new getWord();
	switch(answers.difficulty) {
		case "Easy":
			console.log(word.easyWord);
			break;
		case "Hard":
			console.log(word.hardWord);
			break;
		default:
			console.log("Oops.");

	}
});