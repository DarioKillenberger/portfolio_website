import '../../css/ChangingText.css';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function ChangeText() {
    const [textVal, setText] = useState(() => "Software Engineering Student");

    async function insertStrike(str: string, index: number) {
        let newString = "";
        newString = "<s>" + str.substring(index);
        newString = newString.substring(0, index+4) + "</s>" + newString.substring(index+4);
        console.log(newString);
        return newString;
    }

    async function moveStrike(newText: string, index: number) {
        let newString = "";
        if (index <= newText.length ) {
            newString = newText.substring(0, index) + newText.substring(index+4);
            newString = newString.substring(0, index+1) + "</s>" + newString.substring(index+1);
        }
        console.log(newString);
        return newString;
    }
    
    async function changeText() {
        const textValue = textVal;
        let newText = await insertStrike(textValue, 0);
        console.log("initial strikethrough is " + newText);
        setText(newText);

        const length = newText.length-5;
        for (let i = 4; i <= length; i++) {
            console.log(i);
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("textVal just before " + i + "th movestrike is " + newText);
            newText = await moveStrike(newText, i);
            console.log("newVal reTUrned by moveStrike is " + newText);
            setText(newText);
        }
    }

  
  
    return (
      <>
      <div className="topRightBox">
        <button className="btn" onClick={changeText}>{textVal}</button>
        <h1>{textVal}</h1>
      </div>
        <div className='tempCount'>{parse(textVal)}</div>
      </>
    );
  }
  
  export default ChangeText;
  