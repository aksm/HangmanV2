// easy word
var randomWords = require("random-words");

// difficult word
var randomWord = require("random-word");

// word constructor
var getWord = function() {
	var easy = randomWords().toUpperCase();
	var hard = randomWord().toUpperCase();
	this.easyWord = easy.split("");
	this.hardWord = hard.split("");
};
module.exports = getWord;