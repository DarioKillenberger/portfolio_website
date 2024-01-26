import '../css/MazePage.css';
import CursorMaze from '../page_components/cursorMaze';
import CursorSprite from '../page_components/CursorSprite';

function MazePage() {

        
    return (
        <>
        <CursorSprite/>
        <div className='gameBox'><CursorMaze/></div>
        
        </>
    );
}
      
export default MazePage;