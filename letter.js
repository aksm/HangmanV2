// letter constructor for blanks and guesses
var letter = function() {
	// letters and blanks
	this.letters = [];
	// wrong guesses
	this.wrongGuesses = [];
	// right guesses
	this.rightGuesses = [];
};

module.exports = letter;