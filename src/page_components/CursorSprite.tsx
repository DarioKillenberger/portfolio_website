import '../css/Components.css';
import useMousePosition from '../custom_hooks/UseMousePosition';
import { useMeasure } from "@uidotdev/usehooks";


function CursorSprite() {
    // useMeasure is used to measure the sprite width (because it changes with view height), so that the offset adjustment can be made for it to be centered on cursor
    const [ref, { width, height }] = useMeasure();
    const mousePosition = useMousePosition();

    // sets the left and top margin offsets so that the mousesprite is centered on the mouse cursor
    function calcMousePosition() {
        let adjustedCoords = {x: mousePosition.x, y: mousePosition.y};

        if (width !== null && width !== 0 && height !== null && height !== 0) {
            adjustedCoords = {x: mousePosition.x-(width/2), y: mousePosition.y-(height/2)}
        }
        return adjustedCoords; 
    }

    // console.log(mousePosition);
    return(
        <>
        {/* Rendering sprite in mouse cursor position with dynamic size. Positioning is done by setting x and y margin from the top left corner of screen */}
        <div className='cursorSprite' ref={ref} style={{marginLeft: calcMousePosition().x, marginTop: calcMousePosition().y, width: "2vh", height: "2vh"}}>

        </div>
        </>
    );
};
export default CursorSprite;