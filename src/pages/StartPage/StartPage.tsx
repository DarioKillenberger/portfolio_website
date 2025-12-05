import '../../css/StartPage.css';
import { useEffect, useState } from 'react';
import { insertTextDecoration, moveTextDecoration, slideTransition } from '../../utils/textTransitions';
import parse from 'html-react-parser';
import PlayBtn from '../../page_components/PlayBtn';

function StartPage() {
    const [professionText, setProfessionText] = useState(() => "Software Engineering Student");
    // it's possible that reading the updated professionText after setting it wasn't working cause I didn't use the spread operator (..)
    // This makes it create a new object rather than mutating the existing one, which makes sure useState realizes the value has changed.

    // Calls the changeText method on page load
    useEffect(() => {
        changeText();
    }, [])

    // Handles iterating through array of my experience, with transitions between text
    const changeText = async () => {
        const professionArr = [
            "Software Engineering Graduate", "Cycling Enthusiast", "React Experience", "Typescript Experience",
            "AI RAG Experience", "Javascript Experience", "Python Experience", "C++ Experience", "Java Experience",
            "History Enthusiast", "SQL Experience", "3d Printing", "Arduino Tinkering", "DIY'er"
        ];
        setProfessionText(professionArr[0]);
        await new Promise(resolve => setTimeout(resolve, 2000));

        for (let i = 0; i < professionArr.length; i++) {
            const textValue = professionArr[i];

            if (i % 3 === 0 || i === 0) {
                let newText = await insertTextDecoration(textValue, 0);
                setProfessionText(newText);

                const length = newText.length - 5;
                for (let i = 4; i <= length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                    newText = await moveTextDecoration(newText, i);
                    setProfessionText(newText);
                }
            } else {
                await slideTransition(professionArr[i - 1], professionArr[i], setProfessionText);
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    //TODO: Write a cleanup hook to ensure the text transitions stop happening in the background even when on other pages.
    // Basically, changeText will currently continue to run until loop end, even if we are not on the startpage anymore.

    return (
        <>
            <div className="inner-container">
                <h1 id="nameText">Dario Killenberger</h1>
                <div id="professionText">{parse(professionText)}</div>
            </div>
            <div className="topRightBox">
            </div>
            <div className="bottomMiddleBox">
                <PlayBtn navTarget="/wordGuess" />
            </div>
        </>
    );
}

export default StartPage;