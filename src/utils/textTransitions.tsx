
    export const insertStrike = async (str: string, index: number) => {
        let newString = "";
        newString = "<s>" + str.substring(index);
        newString = newString.substring(0, index+4) + "</s>" + newString.substring(index+4);
        console.log(newString);
        return newString;
    }

    export const moveStrike = async (newText: string, index: number) =>  {
        let newString = "";
        if (index <= newText.length ) {
            newString = newText.substring(0, index) + newText.substring(index+4);
            newString = newString.substring(0, index+1) + "</s>" + newString.substring(index+1);
        }
        console.log(newString);
        return newString;
    }
    
    export const slideTransition = async (targetText: string, updateText: string, stateSetText: Function) =>  {
        targetText = targetText.replace("<s>", "");
        targetText = targetText.replace("</s>", "");
        const length =  Math.max(targetText.length, updateText.length);
        const updateLength =  updateText.length;
        for (let i = 0; i < length; i++) {
            let tempTargetArr = targetText.split("");
            
            if (i > updateLength) {
                tempTargetArr.pop();
                await new Promise(resolve => setTimeout(resolve, 20));
            } else {
                let randomLetter = String.fromCharCode(0|Math.random()*26+97);
                tempTargetArr[i] = randomLetter;
                targetText = tempTargetArr.join("");
                stateSetText(targetText);
                await new Promise(resolve => setTimeout(resolve, 50));

                randomLetter = String.fromCharCode(0|Math.random()*26+97);
                tempTargetArr = targetText.split("");
                tempTargetArr[i] = randomLetter;
                targetText = tempTargetArr.join("");
                stateSetText(targetText);
                await new Promise(resolve => setTimeout(resolve, 50));
                tempTargetArr[i] = updateText[i];
            }

            targetText = tempTargetArr.join("");
            stateSetText(targetText);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }

    