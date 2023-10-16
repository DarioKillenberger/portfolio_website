import '../../css/StartPage.css';
import { useState } from 'react';
import SkipPage from '../SkipPage/SkipPage';
import { insertStrike, moveStrike, slideTransition } from '../../utils/textTransitions';
import parse from 'html-react-parser';

function StartPage() {
  const [textVal, setText] = useState<String>();
  const [professionText, setProfessionText] = useState(() => "Software Engineering Student");

  function clickHandle() {
    alert('Would you really be the one to miss the show?');
  }

  const changeText = async () => {
    const professionArr = ["Software Engineering Student", "Cycling Enthusiast",
    "Java Experience", "Javascript Experience", "React Experience", "Python Experience", "C++ Experience"];
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
        <button className="btn" onClick={changeText}>Skip all these gimmicks</button>
      </div>
      <div className="bottomRightBox">
        <button className="btn" onClick={clickHandle}>Skip all these gimmicks</button>
      </div>
    </>
  );
}

export default StartPage;
