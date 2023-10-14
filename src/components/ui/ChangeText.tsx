import '../../css/ChangingText.css';
import { useState } from 'react';

function ChangeText() {
    const [textVal, setText] = useState<String>("Software Engineering Student");

    function insertStrike(str: String, index: number) {
        let newString = str.substring(0, index) + "<s>" + str.substring(index+1);
        newString = newString.substring(0, index+3) + "</s>" + newString.substring(index+4);
        console.log(newString);
        return newString;
    }
test
    function moveStrike(str: String, index: number) {
        let newString = "";
        if (index <= str.length ) {
            newString = str.substring(0, index-1) + str.substring(index+1);
            newString = newString.substring(0, index) + "</s>" + newString.substring(index+1);
        }
        console.log(newString);
        return newString;
    }
  
    async function changeText() {
        let newText = insertStrike(textVal, 0);
        setText(newText);

        for (let i = 0; i < textVal.length; i++) {
            console.log(i);
            setText(moveStrike(textVal, i));
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
  
  
    return (
      <>
        <h1>{textVal}</h1>
      </>
    );
  }
  
  export default ChangeText;
  