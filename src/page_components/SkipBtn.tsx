import { useNavigate } from "react-router-dom"
import '../css/Components.css';

function SkipBtn({navTarget} : {navTarget:string}) {
    const navigate = useNavigate();
    return(
        <>
            <button className='skipBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" id="uuid-ee995a3b-d96f-4d2f-bf17-25818921364f" data-name="Layer 1" viewBox="0 -10 80 70" onClick={() => navigate(navTarget)}>
                    <path className="skipBtn2" d="m23.76,5.1c0-3.88,4.2-6.3,7.56-4.36l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73l-37.4,21.57c-3.36,1.94-7.56-.49-7.56-4.37l.02-43.17Z"/>
                    <path className="skipBtn3" d="m.02,5.1C.02,1.22,4.23-1.2,7.58.74l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.64C4.2,54.58,0,52.15,0,48.27L.02,5.1Z"/>
                    <path className="skipBtn1" d="m23.76,5.04c0-3.88,4.2-6.3,7.56-4.36l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73l-37.4,21.57c-3.36,1.94-7.56-.49-7.56-4.37l.02-43.17Z"/>7
                </svg>
                {/* <label htmlFor='skipBtn'>Skip all these gimmicks</label> */}
            </button>
        </>
    );
};
export default SkipBtn;