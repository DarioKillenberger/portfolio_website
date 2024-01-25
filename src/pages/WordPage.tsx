import '../css/WordPage.css';
import WordGuesser from "../page_components/WordGuesser";
import SkipBtn from "../page_components/SkipBtn";

function WordPage() {
    //TODO: Make the radio button work correctly, and make it switch the off the random word chooser and change the text to "Guess the first programming language I learnt in university"
    // hardcode answer to be 'Matlab'
    
    return(
        <>
        <div className='guessMode'>
            <h1>Guessing Mode: </h1>
            <div className="btn-group" role="group" aria-label="Radio toggle to choose which guessing game question to play (personal or general)">
                <button className="radioBtn active">Personal</button>
                <button className="radioBtn">General</button>
            </div>
        </div>
        
        <WordGuesser/>
        <div className="topRightBox">
           <SkipBtn navTarget="/projects"/>
        </div>
        <div className="bottomRightBox">
            {/* <button className="btn" onClick={changeText}>More info</button> */}
        </div>
        </>
    )
}
export default WordPage;