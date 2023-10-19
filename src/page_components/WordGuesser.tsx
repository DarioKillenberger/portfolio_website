import { Interface } from "readline";
import { useState, useEffect, useRef } from 'react';
import '../css/WordGuesser.css';

function WordGuesser() {
    const [guessResult, setGuessResult] = useState<JSX.Element[]>([]);
    const [wordGuess, setWordGuess] = useState<string>("");
    
    const rowNum = useRef(1);
    const answer = useRef("");
    const answerPool = 
    [
        "Ada", "ALGOL", "APL", "Assembly", "AutoHotkey", "AutoIt", "BASIC", "Batch", "C", "Cobol", "C++", "C#", "Clojure",
        "COBOL", "CoffeeScript", "Lisp", "Crystal", "CSS", "Dart", "Delphi", "Eiffel", "Elixir", "Elm", "Erlang", "F#",
        "Factor", "Forth", "Fortran", "Go", "Groovy", "Haskell", "HTML", "Java", "JavaScript", "Julia", "Kotlin", "Lua",
        "MATLAB", "Nim","OCaml","Pascal","Perl","PHP","PowerShell","Prolog","Python","R","Ruby","Rust",
        "Scala","Scheme","Scratch","Smalltalk","SQL","Swift","Angular","React","Vue.js","Ember.js","Mithril","Node.js",
        "Polymer","svelte","express.js","next.js","mocha"
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
        console.debug("clickHandler started");
        categorizeChars();
        console.debug("RowNum is:" + rowNum.current);
        rowNum.current += 1;
        const charBoxes = resultArr.map((charColour) => 
            <input type="text" value={charColour.char} className="charDisplayBox" disabled={true} style={{backgroundColor: charColour.colour,  gridRow: charColour.rowNumber}}/>
        )
        let newResults: JSX.Element[] = [...guessResult, ...charBoxes];
        console.debug("Charboxes are: " + charBoxes + ", newResults are: " + newResults);
        setGuessResult(newResults);
    }
    

    ///////////////////////// ^^ Decently good code ----- Pretty much unchecked vv //////////////////////////


    return (
        <>
        <div className="wordGuessContainer">
            {guessResult}
            <input type="text" id="wordGuess" onChange={e => setWordGuess(e.target.value)}></input>
            <button className="btn wordGuessBtn" onClick={clickHandler}>Submit Guess</button>
        </div>
        </>
    );
}
export default WordGuesser;