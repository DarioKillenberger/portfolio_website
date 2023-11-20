import WordGuesser from "../page_components/WordGuesser";
import { useNavigate } from "react-router-dom";
import SkipBtn from "../page_components/SkipBtn";

function WordPage() {
    const navigate = useNavigate()
    function changeText() {
        
    }
    return(
        <>
        <WordGuesser/>
        <div className="topRightBox">
           <SkipBtn navTarget="/projects"/>
        </div>
        <div className="bottomRightBox">
            <button className="btn" onClick={changeText}>More info</button>
            <button className="btn skipBtn" onClick={() => navigate("/projects")}>Skip this plz!</button>
        </div>
        </>
    )
}
export default WordPage;