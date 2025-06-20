import { useState, useEffect, useRef, useMemo } from 'react';
import '../css/WordGuesser.css';

//TODO: Make the error alert pop over not inline, create winning/losing screen which also reveals word

function WordGuesser({ modeSwitchState }: { modeSwitchState: Boolean }) {
    const [guessResult, setGuessResult] = useState<JSX.Element[]>([]);
    const [guessResultKeyboard, setGuessResultKeyboard] = useState<JSX.Element[]>([]);
    const [wordGuess, setWordGuess] = useState<string>("");
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [keyboardCharColour, setKeyboardCharColour] = useState<CharColour[]>([]);

    const alertText = useRef("")
    const rowNum = useRef(1);
    const answer = useRef("");
    const answerPool = useMemo(() => {
        return [
            "MATLAB", "ADA", "ALGOL", "APL", "ASSEMBLY", "AUTOHOTKEY", "AUTOIT", "BASIC", "BATCH", "C", "COBOL", "C++", "C#", "CLOJURE",
            "LISP", "CRYSTAL", "CSS", "DART", "DELPHI", "EIFFEL", "ELIXIR", "ELM", "ERLANG", "F#",
            "FACTOR", "FORTH", "FORTRAN", "GO", "GROOVY", "HASKELL", "HTML", "JAVA", "JAVASCRIPT", "JULIA", "KOTLIN", "LUA",
            "NIM", "OCAML", "PASCAL", "PERL", "PHP", "POWERSHELL", "PROLOG", "PYTHON", "R", "RUBY", "RUST",
            "SCALA", "SCHEME", "SCRATCH", "SMALLTALK", "SQL", "SWIFT", "ANGULAR", "REACT", "VUE.JS", "EMBER.JS", "MITHRIL", "NODE.JS",
            "POLYMER", "SVELTE", "EXPRESS.JS", "NEXT.JS", "MOCHA", "TYPESCRIPT", "JQUERY", "GRAPHQL"
        ] // the words list is made up of programming languages, as well as major javascript frameworks. All words are between one and ten characters long.
    }, []);

    const resultArr: Array<CharColour> = [];
    const blue = "#818dcd";
    const brown = "#E97451";
    const grey = "grey";
    const black = "#313131"

    interface CharColour {
        char: string;
        colour: string;
        rowNumber: number;
    }

    function resetDefaultValues() {
        setKeyboardCharColour([]);
        setWordGuess("");
        setGuessResult([]);
        rowNum.current = 1;
    }

    // Hook to handle choosing the target word to guess each time the page, the answerPool array changes, or the guessing mode is changed
    // If the guessing mode is true (Personal), the correct answer is fixed. Otherwise, it is picked randomly
    useEffect(() => {
        resetDefaultValues();
        if (modeSwitchState === true) {
            answer.current = answerPool[0];
            console.log("The new correct answer is: " + answer.current);
        } else {
            const randomNum = Math.floor(Math.random() * (answerPool.length));
            answer.current = answerPool[randomNum];
            console.log("The new correct answer is: " + answer.current);
        }
    }, [answerPool, modeSwitchState]);

    // Gets the answer provided by the user and assigns each letter a colour based on whether 
    // it is incorrect, correct but in the wrong position, or correct and in the right position
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
                // replace guessed characters with * in the answer string to avoid marking all instances of that char in the guess as correct.
                tempAnswer = tempAnswer.replace(guessChar, "*");
                charColour = blue;
            } else if (tempAnswer.includes(guessChar)) {
                tempAnswer = tempAnswer.replace(guessChar, "*");
                charColour = brown;
            } else {
                charColour = black;
            }

            // Push the result for each character to resultArr. 
            // rowNumber corresponds to the guess number (eg guess 1 will be rowNumber 1, the second guess will be rowNumber 2 etc)
            resultArr.push(
                {
                    char: guessChar,
                    colour: charColour,
                    rowNumber: rowNum.current,
                }
            );
            console.log("answer is now: " + tempAnswer);
        }
        setKeyboardCharColour([...keyboardCharColour, ...resultArr])
    }

    // Handles when the user clicks the 'submit guess' button
    function clickHandler() {
        if (rowNum.current > 5) {
            setAlertVisible(true);
            alertText.current = "You've already had 5 guesses!!";
            setTimeout(() => { setAlertVisible(false) }, 3000);
        }
        else if (wordGuess === "") {
            setAlertVisible(true);
            alertText.current = "Please enter a word!";
            setTimeout(() => { setAlertVisible(false) }, 3000);
        }
        else if (wordGuess.length > 10) {
            setAlertVisible(true);
            alertText.current = "Word is too long. Max length is 10!";
            setTimeout(() => { setAlertVisible(false) }, 3000);
        }
        else if (!(answerPool.includes(wordGuess.toUpperCase()))) {
            setAlertVisible(true);
            alertText.current = "This language/framework is not in our (limited) dictionary";
            setTimeout(() => { setAlertVisible(false) }, 3000);
        }
        else {
            categorizeChars();
            rowNum.current += 1;
            console.debug("RowNum is:" + rowNum.current);

            // make the newly guessed word into jsx elements and add those to the guessResult state variable 
            const charBoxes = resultArr.map((charColour) =>
                <input type="text" value={charColour.char} className="charDisplayBox" disabled={true} style={{ backgroundColor: charColour.colour, gridRow: charColour.rowNumber }} />
            )
            let newResults: JSX.Element[] = [...guessResult, ...charBoxes];
            console.debug("Charboxes are: " + charBoxes + ", newResults are: " + newResults);
            setGuessResult(newResults);
        }
        setWordGuess("");
    }

    // Hook to handle the onscreen keyboard
    useEffect(() => {
        const keyArr: Array<CharColour> = [];

        // Defines which characters should be shown on keyboard
        const alphabet = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L", "del",
            "Z", "X", "C", "V", "B", "N", "M", ".", "+", "clr"
        ];

        // Set (or clear) the input field value depending on key pressed
        function setInputField(char: string) {
            console.log("Setting input field to: " + char);
            if (char === "del") {
                setWordGuess(wordGuess.slice(0, -1));
            }
            else if (char === "clr") {
                setWordGuess("");
            }
            else {
                setWordGuess(wordGuess + char);
            }
        }

        // Go through all the keys and set their current colour on the keyboard to
        // the color set by categorizeChars
        for (let i = 0; i < alphabet.length; i++) {
            const result = keyboardCharColour.filter((elem) => elem.char === alphabet[i]);
            let colour = grey;
            let rowNumber = 1;
            for (const elem of result) {
                if (elem.colour === blue) {
                    colour = blue;
                }
                else if (elem.colour === brown && colour !== blue) {
                    colour = brown;
                }
                else if (elem.colour === black && colour !== blue && colour !== brown) {
                    colour = black
                }
            }

            if (i > 19) {
                rowNumber = 3;
            }
            else if (i > 9) {
                rowNumber = 2;
            }
            else {
                rowNumber = 1;
            }

            keyArr.push(
                {
                    char: alphabet[i],
                    colour: colour,
                    rowNumber: rowNumber,
                }
            );
        }

        const keyboard = keyArr.map((charColour) =>
            <button className="charDisplayKeyboard" onClick={() => setInputField(charColour.char)} style={{ backgroundColor: charColour.colour, gridRow: charColour.rowNumber }}>{charColour.char}</button>
        )

        setGuessResultKeyboard(keyboard);
    }, [wordGuess, keyboardCharColour])

    return (
        <>

            {/* TODO: This probably isn't the best way of setting the title? Maybe better to pass the title into the HTML from an array storing the different versions */}
            {
                modeSwitchState === true ?
                    <h2 className="wordGuessTitle">Guess the first programming language I learnt at uni. You get 5 tries!</h2>
                    :
                    <h2 className="wordGuessTitle">Guess the programming language/javascript framework. You get 5 tries!</h2>
            }

            <div className="wordGuessContainer">
                <div className='legend'>
                    <div className="legendColour" style={{ backgroundColor: brown }}></div>
                    <p className="legendText">Correct character in incorrect position</p>
                    <div className="legendColour" style={{ backgroundColor: blue }}></div>
                    <p className="legendText">Correct character in correct position</p>
                </div>
                {guessResult}
                <input type="text" id="wordGuess" value={wordGuess} onChange={e => setWordGuess(e.target.value)}></input>
                <button className="btn wordGuessBtn" onClick={clickHandler}>Submit Guess</button>
                {alertVisible === true && (
                    <div className="wordGuessAlert">{alertText.current}</div>
                )}
            </div>
            <div className="wordGuessKeyboard">
                {guessResultKeyboard}
            </div>
        </>
    );
}
export default WordGuesser;