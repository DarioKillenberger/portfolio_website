import { useState } from 'react';
import '../css/MyProjects.css';

var img1 = require('../assets/dogInsurance_24hour.png');
var img2 = require('../assets/c++_vendingMachine.png');
var img3 = require('../assets/social_website.png');
var img4 = require('../assets/minecraft_terrainGen.jpg');
var img5 = require('../assets/movieRecommenderTuning.png');
var img6 = require('../assets/arduinoLED.JPG');

let imgArr = [img1, img2, img3, img4, img5, img6];

function MyProjects() {
  const [activeImg, setActiveImg] = useState <number>(0);

  const imgClass = "bannerImg offset";
  const imgClassSelected = "bannerImg offsetActive";
  
  function mouseHover(elemIndex:number) {
    setActiveImg(elemIndex);
  }

    return (
      <>
      <h2 className="portfolioTitle">View my projects below!</h2>
      <div className='pictureBox'>
          {imgArr.map((img, index) => (
              <img className={activeImg === index+1 ? imgClassSelected : imgClass} src={img} alt="Logo" onClick={activeImg === index+1 ? () => mouseHover(0) : () => mouseHover(index+1)}/>
            ))
          }
      </div>
      </>
      );
}

export default MyProjects;