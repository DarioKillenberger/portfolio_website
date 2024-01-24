import WordGuesser from "../page_components/WordGuesser";
import SkipBtn from "../page_components/SkipBtn";

function WordPage() {
    return(
        <>
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