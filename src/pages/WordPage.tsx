import '../css/WordPage.css';
import WordGuesser from "../page_components/WordGuesser";
import SkipBtn from "../page_components/SkipBtn";
import { useState } from 'react';

function WordPage() {
    const [modeSwitch, setModeSwitch] = useState(true);
    
    return(
        <>
        <div className='guessMode'>
            <h1>Guessing Mode: </h1>
            <div className="btn-group" role="group" aria-label="Radio toggle to choose which guessing game question to play (personal or general)">
                <button className={modeSwitch === true ? "radioBtn active" : "radioBtn"} onClick={() => setModeSwitch(true)}>Personal</button>
                <button className={modeSwitch === false ? "radioBtn active" : "radioBtn"} onClick={() => setModeSwitch(false)}>General</button>
            </div>
        </div>
        
        <WordGuesser modeSwitchState={modeSwitch}/>
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