import { Interface } from "readline";
import { useState, useEffect, useRef } from 'react';
import '../css/WordGuesser.css';

function WordGuesser() {
    const [guessResult, setGuessResult] = useState<JSX.Element[]>([]);
    const [wordGuess, setWordGuess] = useState<string>("");
    const [alertVisible, setAlertVisible] = useState<boolean>(false);

    const alertText = useRef("")
    const rowNum = useRef(1);
    const answer = useRef("");
    const answerPool = 
    [
        "ADA", "ALGOL", "APL", "ASSEMBLY", "AUTOHOTKEY", "AUTOIT", "BASIC", "BATCH", "C", "COBOL", "C++", "C#", "CLOJURE",
        "CoffeeScript", "LISP", "CRYSTAL", "CSS", "DART", "DELPHI", "EIFFEL", "ELIXIR", "ELM", "ERLANG", "F#",
        "FACTOR", "FORTH", "FORTRAN", "GO", "GROOVY", "HASKELL", "HTML", "JAVA", "JAVASCRIPT", "JULIA", "KOTLIN", "LUA",
        "MATLAB", "NIM","OCAML","PASCAL","PERL","PHP","POWERSHELL","PROLOG","PYTHON","R","RUBY","RUST",
        "SCALA","SCHEME","SCRATCH","SMALLTALK","SQL","SWIFT","ANGULAR","REACT","VUE.JS","EMBER.JS","MITHRIL","NODE.JS",
        "POLYMER","SVELTE","EXPRESS.JS","NEXT.JS","MOCHA", "TYPESCRIPT"
    ]

    // the words list is made up of programming languages, as well as major javascript frameworks. All words are between one and ten characters long.

    const resultArr: Array<CharColour> = [];

    interface CharColour {
        char: string;
        colour: string;
        rowNumber: number;
    }

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * (answerPool.length));
        answer.current = answerPool[randomNum];
        console.log("The new correct answer is: " + answer.current);
    }, []);

    function categorizeChars() {
        let tempAnswer = answer.current.toUpperCase();
        for (let i = 0; i < wordGuess.length; i++) {
            const guessChar = wordGuess[i].toUpperCase();
            let answerChar = "undefined";
            if (tempAnswer.length > i) {
                answerChar = tempAnswer[i].toUpperCase();
            }
            let charColour = "";

            if (guessChar === answerChar) {
                tempAnswer = tempAnswer.replace(guessChar, "*");
                charColour = "#818dcd";
            } else if (tempAnswer.includes(guessChar)) {
                tempAnswer = tempAnswer.replace(guessChar, "*");
                charColour = "#E97451";
            } else {
                charColour = "grey";
            }

            resultArr.push(
                {
                    char: guessChar,
                    colour: charColour,
                    rowNumber: rowNum.current,
                }
            );
            console.log("answer is now: " + tempAnswer);
        }
    }

    function clickHandler() {
        if (rowNum.current > 5) {
            setAlertVisible(true);
            alertText.current = "You've already had 5 guesses!!";
            setTimeout(() => {setAlertVisible(false)}, 3000); 
        }
        else if (wordGuess == "") {
            setAlertVisible(true);
            alertText.current = "Please enter a word!";
            setTimeout(() => {setAlertVisible(false)}, 3000); 
        }
        else if (wordGuess.length > 10) {
            setAlertVisible(true);
            alertText.current = "Word is too long. Max length is 10!";
            setTimeout(() => {setAlertVisible(false)}, 3000); 
        }
        else if (!(answerPool.includes(wordGuess.toUpperCase()))) {
            setAlertVisible(true);
            alertText.current = "This language/framework is not in our (limited) dictionary";
            setTimeout(() => {setAlertVisible(false)}, 3000); 
        }
        else {
            categorizeChars();
            rowNum.current += 1;
            console.debug("RowNum is:" + rowNum.current);
        
            const charBoxes = resultArr.map((charColour) => 
                <input type="text" value={charColour.char} className="charDisplayBox" disabled={true} style={{backgroundColor: charColour.colour,  gridRow: charColour.rowNumber}}/>
            )
            let newResults: JSX.Element[] = [...guessResult, ...charBoxes];
            console.debug("Charboxes are: " + charBoxes + ", newResults are: " + newResults);
            setGuessResult(newResults);
        }
        setWordGuess("");
    }

    return (
        <>
        <h2 className="wordGuessTitle">Guess the programming language/javascript framework. You get 5 tries!</h2>
        <div className="wordGuessContainer">
            {guessResult}
            <input type="text" id="wordGuess" value={wordGuess} onChange={e => setWordGuess(e.target.value)}></input>
            <button className="btn wordGuessBtn" onClick={clickHandler}>Submit Guess</button>
            {alertVisible === true && ( 
                <div className="wordGuessAlert">{alertText.current}</div>
            )}
        </div>
        </>
    );
}
export default WordGuesser;