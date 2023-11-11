import '../../css/StartPage.css';
import { useEffect, useState } from 'react';
import SkipPage from '../SkipPage/SkipPage';
import { insertStrike, moveStrike, slideTransition } from '../../utils/textTransitions';
import parse from 'html-react-parser';
import { Link, useNavigate } from "react-router-dom"

function StartPage() {
  const [textVal, setText] = useState<String>();
  const [professionText, setProfessionText] = useState(() => "Software Engineering Student");
  // it's possible that reading the updated professionText after setting it wasn't working cause I didn't use the spread operator (..)
  // This makes it create a new object rather than mutating the existing one, which makes sure useState realizes the value has changed.

  const navigate = useNavigate()

  function clickHandle() {
    // alert('Would you really be the one to miss the show?');
  }

  useEffect(() => {
    changeText();
  }, [])

  const changeText = async () => {
    const professionArr = ["Software Engineering Student", "Cycling Enthusiast",
    "Java Experience", "Javascript Experience", "React Experience", "Python Experience", "C++ Experience", "History Enthusiast", "SQL Experience", "Typescript Experience", "3d Printing", "Ardiuno Tinkering"];
    setProfessionText(professionArr[0]);
    await new Promise(resolve => setTimeout(resolve, 2000));

    for (let i = 0; i < professionArr.length; i++) {
      const textValue = professionArr[i];

      if (i%3 == 0 || i==0) {
        let newText = await insertStrike(textValue, 0);
        setProfessionText(newText);

        const length = newText.length-5;
        for (let i = 4; i <= length; i++) {
            await new Promise(resolve => setTimeout(resolve, 50));
            newText = await moveStrike(newText, i);
            setProfessionText(newText);
        }
      } else {
        await slideTransition(professionArr[i-1], professionArr[i], setProfessionText);
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  return (
    <>
      <div className="inner-container">
          <h1 id="nameText">Dario Killenberger</h1>
          <div id="professionText">{parse(professionText)}</div>
      </div>
      <div className="topRightBox">
        <div className='skipBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" id="uuid-ee995a3b-d96f-4d2f-bf17-25818921364f" data-name="Layer 1" viewBox="0 -10 80 70" onClick={() => navigate("/projects")}>
            <path className="skipBtn2" d="m23.76,5.1c0-3.88,4.2-6.3,7.56-4.36l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73l-37.4,21.57c-3.36,1.94-7.56-.49-7.56-4.37l.02-43.17Z"/>
            <path className="skipBtn3" d="m.02,5.1C.02,1.22,4.23-1.2,7.58.74l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.64C4.2,54.58,0,52.15,0,48.27L.02,5.1Z"/>
            <path className="skipBtn1" d="m23.76,5.04c0-3.88,4.2-6.3,7.56-4.36l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73l-37.4,21.57c-3.36,1.94-7.56-.49-7.56-4.37l.02-43.17Z"/>7
          </svg>
          {/* <label htmlFor='skipBtn'>Skip all these gimmicks</label> */}
        </div>
      </div>
      <div className="bottomMiddleBox">
        <div className='playBtn'>
          <svg  id="uuid-dd92ba08-e66e-41fe-b0aa-7068c11a02fc" data-name="Layer 1" viewBox="-25 -10 90 80" onClick={() => navigate("/wordGuess")}>
            <path className="playBtn3" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
            <path className="playBtn2" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
            <path className="playBtn1" d="m.02,5.04C.02,1.17,4.23-1.26,7.58.68l37.38,21.6c3.36,1.94,3.36,6.79,0,8.73L7.56,52.58C4.2,54.52,0,52.1,0,48.22L.02,5.04Z"/>
          </svg>
          {/* <label htmlFor='playBtn'>Start</label> */}
        </div>
      </div>
    </>
  );
}

export default StartPage;