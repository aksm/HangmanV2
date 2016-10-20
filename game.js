// load modules
var letter = require("./letter.js");
var getWord = require("./word.js");
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
		// standardize guess case
		guess = guess.toUpperCase();

		// store right and wrong guess arrays
		var right = letterCheck.rightGuesses;
		var wrong = letterCheck.wrongGuesses;

		// filter out letters already guessed
		if(right.indexOf(guess) === -1 &&  wrong.indexOf(guess) === -1) {
			// store word's index of guessed letter
			var i = this.word.indexOf(guess);

			// process wrong guesses
			if(i === -1) {
				this.guessCounter--;
				wrong.push(guess);
				this.display();
			}

			// process correct guesses
			while(i != -1) {
				letterCheck.letters[i] = guess;
				right[i] = guess;
				i = this.word.indexOf(guess, i + 1);
			}

			// check correct guesses against word
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

	// method for displaying game to terminal
	this.display = function(status) {
		clear();
		switch(status) {
			case "guess":
				this.hangman();
				console.log("Guesses Remaining: "+this.guessCounter+"\n");
				console.log(letterCheck.letters.join(" ")+"\n");
				console.log(letterCheck.wrongGuesses.join(", ")+"\n");
				break;
			case "win":
				this.hangman();
				console.log("Guesses Remaining: "+this.guessCounter+"\n");
				console.log(letterCheck.letters.join(" ")+"\n");
				console.log(letterCheck.wrongGuesses.join(", ")+"\n");
				console.log("YOU WIN!"+"\n");
				break;
			case "lose":
				this.hangman();
				console.log("YOU LOSE :("+"\n");
				reset();
				console.log("The word was "+this.word.join("")+"\n");
				break;
			default:
				console.log("Doh! Something went wrong...");
		}
	};
	this.hangman = function() {
		switch(this.guessCounter) {
			case 0:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|        /|\\    ");
			    console.log("|        / \\    ");
			    console.log("|              \n");
			    break;
			case 1:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|        /|\\    ");
			    console.log("|        /       ");
			    console.log("|              \n");
			    break;
			case 2:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|        /|\\    ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 3:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|        /|      ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 4:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|         |      ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 5:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         0      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 6:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|         |      ");
			    console.log("|         	      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 7:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log(" _________       ");
			    console.log("|                ");
			    console.log("|         	      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 8:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("|                ");
			    console.log("|         	      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 9:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("|         	      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 10:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("          	      ");
			    console.log("|                ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 11:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("          	      ");
			    console.log("                 ");
			    console.log("|                ");
			    console.log("|              \n");
			    break;
			case 12:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("          	      ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("|              \n");
			    break;
			case 13:
				console.log(" _                                             ");
				console.log("| |                                            ");
				console.log("| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
				console.log("| '_ \\ / _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
				console.log("| | | | (_| | | | | (_| | | | | | | (_| | | | |");
				console.log("|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
				console.log("                    __/ |                      ");
				console.log("                   |___/                       ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("          	      ");
			    console.log("                 ");
			    console.log("                 ");
			    console.log("               \n");

		}
	};
};
module.exports = game;
