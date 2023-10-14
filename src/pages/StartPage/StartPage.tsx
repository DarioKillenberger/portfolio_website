import '../../css/StartPage.css';
import { useState } from 'react';
import SkipPage from '../SkipPage/SkipPage';
import ChangeText from '../../components/ui/ChangeText';

function StartPage() {
  const [textVal, setText] = useState<String>();

  function clickHandle() {
    setText("Would you really be the one to miss the show?");
  }


  return (
    <>
      <div className="inner-container">
          <h1 id="nameText">Dario Killenberger</h1>
          <h2 id="professionText">Software Engineering Student</h2>
      </div>
      <div className="topRightBox">
        <button className="btn" onClick={clickHandle}>Skip all these gimmicks</button>
      </div>
      <SkipPage/>
    </>
  );
}

export default StartPage;
