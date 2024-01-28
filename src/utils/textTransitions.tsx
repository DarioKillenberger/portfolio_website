// Surrounds characters up to the given index in a html element (<u> [underline] by default)
export const insertTextDecoration = async (str: string, index: number, symbol: string = "u") => {
    let newString = "";
    newString = `<${symbol}>` + str.substring(index);
    newString = newString.substring(0, index + 4) + `</${symbol}>` + newString.substring(index + 4); // note: adds +4 to index to adjust for the added strike tag
    console.log(newString);
    return newString;
}

// For strings with an existing html text decoration element, moves the closing element one character to the right
export const moveTextDecoration = async (newText: string, index: number, symbol: string = "u") => {
    let newString = "";
    if (index <= newText.length) {
        newString = newText.substring(0, index) + newText.substring(index + 4);
        newString = newString.substring(0, index + 1) + `</${symbol}>` + newString.substring(index + 1);
    }
    console.log(newString);
    return newString;
}

// Takes an starting string and an ending string, and gradually transitions between them one character at a time
export const slideTransition = async (targetText: string, updateText: string, stateSetText: Function) => {
    targetText = targetText.replace("<s>", "");
    targetText = targetText.replace("</s>", "");
    const length = Math.max(targetText.length, updateText.length);
    const updateLength = updateText.length;
    for (let i = 0; i < length; i++) {
        let tempTargetArr = targetText.split("");

        if (i > updateLength) {
            // if original string is longer than output string, pop remaining characters one at a time 
            tempTargetArr.pop();
            await new Promise(resolve => setTimeout(resolve, 20));
        } else {
            // set character to random other character (twice) to create transition animation 
            let randomLetter = String.fromCharCode(0 | Math.random() * 26 + 97);
            tempTargetArr[i] = randomLetter;
            targetText = tempTargetArr.join("");
            stateSetText(targetText);
            await new Promise(resolve => setTimeout(resolve, 50));

            randomLetter = String.fromCharCode(0 | Math.random() * 26 + 97);
            tempTargetArr = targetText.split("");
            tempTargetArr[i] = randomLetter;
            targetText = tempTargetArr.join("");
            stateSetText(targetText);
            await new Promise(resolve => setTimeout(resolve, 50));

            // set character to actual updated character to complete transition
            tempTargetArr[i] = updateText[i];
        }

        targetText = tempTargetArr.join("");
        stateSetText(targetText);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}