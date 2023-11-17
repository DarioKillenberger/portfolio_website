import WordGuesser from "../page_components/WordGuesser";
import { useNavigate } from "react-router-dom";

function WordPage() {
    const navigate = useNavigate()
    function changeText() {
        
    }
    return(
        <>
        <WordGuesser/>
        <div className="topRightBox">
            <button className="btn" onClick={changeText}>More info</button>
        </div>
        <div className="bottomRightBox">
            <button className="btn skipBtn" onClick={() => navigate("/projects")}>Skip this plz!</button>
        </div>
        </>
    )
}
export default WordPage;