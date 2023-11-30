import '../../css/StartPage.css';
import { useEffect, useState } from 'react';
import { insertStrike, moveStrike, slideTransition } from '../../utils/textTransitions';
import parse from 'html-react-parser';
import PlayBtn from '../../page_components/PlayBtn';
import SkipBtn from '../../page_components/SkipBtn';

function StartPage() {
  const [professionText, setProfessionText] = useState(() => "Software Engineering Student");
  // it's possible that reading the updated professionText after setting it wasn't working cause I didn't use the spread operator (..)
  // This makes it create a new object rather than mutating the existing one, which makes sure useState realizes the value has changed.

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

      if (i%3 === 0 || i === 0) {
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
        {/* <SkipBtn navTarget="/projects"/> */}
      </div>
      <div className="bottomMiddleBox">
      <PlayBtn navTarget="/wordGuess"/>
      </div>
    </>
  );
}

export default StartPage;