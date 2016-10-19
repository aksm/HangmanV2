var equals = require("array-equal");
var word = function(guess, currentWord) {
	this.guess = guess.toUpperCase();
	this.currentWord = currentWord.toUpperCase();
	this.guess = function() {
		for(i = 0; i < this.currentWord.length; i++) {
			switch(this.currentWord[i]) {
				case this.guess:
					return i;
			}
		}
		return false;
	};
};
var checkWord1 = new word("c", "unicorn");
console.log(checkWord1.guess());
var checkWord2 = new word("k", "Wittgenstein");
console.log(checkWord2.guess());
console.log(equals(["y","o","u"], ["y","o","n"]));