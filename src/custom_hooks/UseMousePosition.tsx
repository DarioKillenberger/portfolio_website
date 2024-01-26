// Note: This hook was not written by me. Full credit goes to Josh W Comeau (https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/)
import React from 'react';

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev:MouseEvent ) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;