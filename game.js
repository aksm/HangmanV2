// load modules
var letter = require("./letter.js");
var getWord = require("./word.js");

// load packages
var equals = require("array-equal");

// global variables
var letterCheck;

// game constructor
var game = function() {
	// store word
	this.word = [];
	this.guess = function(guess) {
		guess = guess.toUpperCase();
		var right = letterCheck.rightGuesses;
		var wrong = letterCheck.wrongGuesses;
		if( right.indexOf(guess) === -1 &&  wrong.indexOf(guess) === -1) {
			var i = this.word.indexOf(guess); 
			while(i != -1) {
			// switch(i != -1) {
			// 	case true:
					letterCheck.letters[i] = guess;
					right[i] = guess;
					i = this.word.indexOf(guess, i+1);
					console.log(letterCheck.letters);
					// right.push(guess);
			}
			console.log(right, this.word);
			return equals(right,this.word);
			// return false;
		}
	};
	this.level = function(level) {
		var word = new getWord();
		letterCheck = new letter();
		switch(level) {
			case "Easy":
				this.word = word.easyWord;
				for(var i = 0; i < this.word.length; i++) {
					letterCheck.letters.push("_");
				}
				console.log(letterCheck.letters);
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
};
module.exports = game;
