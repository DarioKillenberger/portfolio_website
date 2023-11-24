import { useNavigate } from "react-router-dom"
import '../css/NavigationBar.css';

function NavigationBar() {
    const navigate = useNavigate();
    const navLinks = [
        {text: "Home", path:"/home"},
        {text: "Word Guesser", path:"/wordGuess"},
        {text: "Projects", path:"/projects"},
        {text: "Resume", path:"/resume"},
        {text: "About Me", path:"/resume"},
    ]
    
    return(
        <div className="navBarGrid">
            <div className='navBarLine'></div>
            {navLinks.map((obj, index) => <h5 className="linkText" style={{gridColumn: index+1, gridRow: (index) % 2 === 0 ? "1" : "3"}} onClick={() => navigate(obj.path)}>{obj.text}</h5>)}
        </div>
    );
};
export default NavigationBar;