// load modules
var letter = require("./letter.js");
var getWord = require("./word.js");

// load packages
var equals = require("array-equal");
var clear = require("clear");

// global variables
var letterCheck;

// game constructor
var game = function() {
	// store word
	this.word = [];

	// initialize counter for guesses
	this.guessCounter = 13;

	// method for tracking guesses
	this.guess = function(guess) {
		guess = guess.toUpperCase();
		var right = letterCheck.rightGuesses;
		var wrong = letterCheck.wrongGuesses;
		if(right.indexOf(guess) === -1 &&  wrong.indexOf(guess) === -1) {
			var i = this.word.indexOf(guess);
			if(i === -1) {
				this.guessCounter--;
				wrong.push(guess);
				this.display();
			}
			while(i != -1) {
				letterCheck.letters[i] = guess;
				right[i] = guess;
				i = this.word.indexOf(guess, i + 1);
			}
			return equals(right,this.word);
		}
	};

	// method for initializing word based on chosen difficulty level
	this.level = function(level) {
		var word = new getWord();
		letterCheck = new letter();
		switch(level) {
			case "Easy":
				this.word = word.easyWord;
				for(var i = 0; i < this.word.length; i++) {
					letterCheck.letters.push("_");
				}
				break;
			case "Hard":
				this.word = word.hardWord;
				for(var j = 0; j < this.word.length; j++) {
					letterCheck.letters.push("_");
				}
				break;
			default:
				console.log("Oops, something went wrong.");

		}
	};

	this.display = function() {
		clear();
		console.log("Guesses Remaining: "+this.guessCounter+"\n");
		console.log(letterCheck.letters.join(" ")+"\n");
		console.log(letterCheck.wrongGuesses.join(", ")+"\n");

	};
};
module.exports = game;
