import { useEffect, useState } from 'react';
import '../css/MyProjects.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

var img1 = require('../assets/dogInsurance_24hour.png');
var img2 = require('../assets/c++_vendingMachine.png');
var img3 = require('../assets/social_website.png');
var img4 = require('../assets/minecraft_terrainGen.png');
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
      <div className="portfolioContainer">
      </div>
      <div className='header'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L10.4,197.3C20.9,171,42,117,63,101.3C83.5,85,104,107,125,144C146.1,181,167,235,188,218.7C208.7,203,230,117,250,112C271.3,107,292,181,313,208C333.9,235,355,213,376,208C396.5,203,417,213,438,208C459.1,203,480,181,501,165.3C521.7,149,543,139,563,122.7C584.3,107,605,85,626,106.7C647,128,668,192,689,186.7C709.6,181,730,107,751,106.7C772.2,107,793,181,814,197.3C834.8,213,856,171,877,176C897.4,181,918,235,939,234.7C960,235,981,181,1002,160C1022.6,139,1043,149,1064,154.7C1085.2,160,1106,160,1127,138.7C1147.8,117,1169,75,1190,80C1210.4,85,1231,139,1252,133.3C1273,128,1294,64,1315,74.7C1335.7,85,1357,171,1377,170.7C1398.3,171,1419,85,1430,42.7L1440,0L1440,0L1429.6,0C1419.1,0,1398,0,1377,0C1356.5,0,1336,0,1315,0C1293.9,0,1273,0,1252,0C1231.3,0,1210,0,1190,0C1168.7,0,1148,0,1127,0C1106.1,0,1085,0,1064,0C1043.5,0,1023,0,1002,0C980.9,0,960,0,939,0C918.3,0,897,0,877,0C855.7,0,835,0,814,0C793,0,772,0,751,0C730.4,0,710,0,689,0C667.8,0,647,0,626,0C605.2,0,584,0,563,0C542.6,0,522,0,501,0C480,0,459,0,438,0C417.4,0,397,0,376,0C354.8,0,334,0,313,0C292.2,0,271,0,250,0C229.6,0,209,0,188,0C167,0,146,0,125,0C104.3,0,83,0,63,0C41.7,0,21,0,10,0L0,0Z"></path></svg> */}
      </div>
      <div className='pictureBox'>
          {imgArr.map((img, index) => (
              <img className={activeImg === index+1 ? imgClassSelected : imgClass} src={img} alt="Logo" onClick={activeImg == index+1 ? () => mouseHover(0) : () => mouseHover(index+1)}/>
            ))
          }
      </div>
      </>
      );
}

export default MyProjects;