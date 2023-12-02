import { useNavigate } from "react-router-dom"
import '../css/Components.css';

// Play button component. Has 3 vectors overlayed because on hover it is animated so they fan out like a card stack
function PlayBtn({navTarget} : {navTarget:string}) {
    const navigate = useNavigate();
    return(
        <div className='playBtn'>
            <svg  id="uuid-dd92ba08-e66e-41fe-b0aa-7068c11a02fc" data-name="Layer 1" viewBox="-25 -10 90 80" onClick={() => navigate(navTarget)}>
                <path className="playBtn3" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
                <path className="playBtn2" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
                <path className="playBtn1" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
            </svg>
            {/* <label htmlFor='playBtn'>Start</label> */}
        </div>
    );
};
export default PlayBtn;