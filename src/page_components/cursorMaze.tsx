import '../css/ResumePage.css';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import { flushSync } from "react-dom";

function CursorMaze() {
  const [mazeObjects, setMazeObects] = useState<mazeObject[]>([]);

  interface mazeObject {
    rotation: number;
  }

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const mazeRefreshInterval = 10000;
  const mazeUpdateSpeed = 20;
  
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

  useEffect(() => {
    updateMaze();
    const refreshInterval = setInterval(() => {
      updateMaze();
    }, mazeRefreshInterval);
    return () => clearInterval(refreshInterval);
  }, []);


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
      