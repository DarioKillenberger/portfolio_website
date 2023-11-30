import '../css/ResumePage.css';
import { useState, useEffect } from 'react';

function CursorMaze() {
  const [mazeObjects, setMazeObects] = useState<mazeObject[]>([]);

  interface mazeObject {
    rotation: number;
  }

  const mazeRefreshInterval = 10000;
  const mazeUpdateSpeed = 20;
  
  

  useEffect(() => {
    function updateMaze() {
      let tempMaze = mazeObjects;
      let index = 0;
      const interval = setInterval(() => {
        tempMaze[index] = {rotation: randomNum()};
        setMazeObects([...tempMaze]);
        ++index;
        if(index >= 150){
          clearInterval(interval);
        }
      }, mazeUpdateSpeed);
      return () => clearInterval(interval);
    }

    updateMaze();

    const refreshInterval = setInterval(() => {
      updateMaze();
    }, mazeRefreshInterval);

    return () => clearInterval(refreshInterval);
  }, [mazeObjects]);


  function randomNum(min = 0, max = 3) {
    const result = Math.random()*(max - min) + min
    return (Math.floor(result)*90)
  }
        
  return (
    <>
    <div className='cursorMazeBox'>
      {mazeObjects.map((mazeItem) => (<><hr className='mazeWall' style={{transform: `rotate(${mazeItem.rotation}deg)`}}/></>))}

    </div>
    
    </>
  );
}
      
export default CursorMaze;
      