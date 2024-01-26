import '../css/MazePage.css';
import { useState, useEffect } from 'react';

function CursorMaze() {
  const [mazeObjects, setMazeObects] = useState<mazeObject[]>([]);

  interface mazeObject {
    rotation: number;
  }

  const mazeRefreshInterval = 10000;
  const mazeUpdateSpeed = 20;
  
  // progressively updates the maze when called. Speed of update is defined by mazeUpdateSpeed
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

/* eslint-disable */

  // runs on page load to start calling the updateMaze function at set intervals (defined by mazeRefreshInterval)
  useEffect(() => {
    updateMaze();
    const refreshInterval = setInterval(() => {
      updateMaze();
    }, mazeRefreshInterval);
    return () => clearInterval(refreshInterval);
  }, []); 

/* eslint-enable */

  // returns random maze wall rotation (0, 90, 180 or 270)
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
      