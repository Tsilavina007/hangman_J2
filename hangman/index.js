const prompt = require("prompt-sync")();

const menu = require("./OurProject")
const hidden = require("./hidden")
const choicePlayWord = require("./choses randomly a word")
const check = require("./checkValidLetter")
const sarcasm = require("./random_sarcasm")
const congrat = require("./jeu_du_pendu")
const testWinner = require("./test")




var ArrayOfTheGame = ["algorithme", "saison", "abbreviation", "travaille", "braquage", "sel", "arachide", "pain"];
function hangmanGame(){
    menu.home();
    testWinner.start();
    let userChoice = menu.choice();
    if (userChoice == 1) {
        let wordToPlay = choicePlayWord.choiceWord(ArrayOfTheGame)
        let hiddenWordToPlay = choicePlayWord.hidden(wordToPlay)
        let badChoice = 0
        while (true) {
            console.log('\n' +hiddenWordToPlay);
            let letter = prompt('Allez-y ! Devinez une lettre : ')
            if (check.inWord(wordToPlay, letter)) {
                hiddenWordToPlay = hidden.addValue(wordToPlay, hiddenWordToPlay, letter)
                congrat.niceChoice()
            } else {
                badChoice+=1
                console.log(`\nAttention! ${10-badChoice} tentative(s) pour les mauvais choix`);
                sarcasm.wrongChoice()
            }

            if (hiddenWordToPlay == wordToPlay) {
                testWinner.winner()
                break
            } 

            if (badChoice == 10) {
                testWinner.loser()
                break
            }
            
        }
        
    } else if (userChoice == 2) {
        hidden.addWord(ArrayOfTheGame)
        hangmanGame()
    } else if (userChoice == 3) {
        console.log(menu.guides())
        hangmanGame()
    } else if (userChoice == 4) {
        console.log('Merci !!!');
    } else {
        hangmanGame()
    }
    // continuez !
}

hangmanGame();