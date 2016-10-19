// easy
var randomWords = require("random-words");

// difficult
var randomWord = require("random-word");

// word constructor
var getWord = function() {
	this.easyWord = randomWords();
	this.hardWord = randomWord();
};
module.exports = getWord;