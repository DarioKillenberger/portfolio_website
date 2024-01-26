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
  interface ProjectInfo {
    title: String;
    year: String;
    showcaseLink: String;
    repoLink: String;
    description: String[];
    technologies: String[];
  }
  
  let projectDescription: ProjectInfo[] = [
    {
      title: "24 hours programming challenge",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "This project was a 24 hour programming challenge, where we had to build a dog insurance calculator using react.",
        "Creating and modifying test scripts to test bugs, raising and resolving jira bug tickets",
        "Manual regression testing using testrail",
        "Creating and merging branches using git and bitbucket, resolving merge conflicts, making pull requests"
      ],
      technologies: [
        ""
      ]
    },
    {
      title: "Vending machine system using C++",
      year: "04/2023 - 05/2023",
      showcaseLink: "",
      repoLink: "https://gitfront.io/r/dario/NBW2Zdba6aRn/ATP-A2-m3/",
      description: [
        "Built a command prompt based vending machine system utilizing a range of data structures together in a team of 4",
        "My role was primarily writing the Coins class, modifying the Linked List class to be doubly linked, as well as writing the initializeLinkedList method, which reads the data from the csv file",
      ],
      technologies: [
        "C++"
      ]
    }, {
      title: "Full-Stack intra-firm social media website",
      year: "08/2022 - 10/2022",
      showcaseLink: "https://www.youtube.com/watch?v=XQgi2W60ChA",
      repoLink: "https://gitfront.io/r/dario/MPKj26XhX2BU/Assignment-2/",
      description: [
        "This project was a 24 hour programming challenge, where we had to build a dog insurance calculator using react.",
        "Creating and modifying test scripts to test bugs, raising and resolving jira bug tickets",
        "Manual regression testing using testrail",
        "Creating and merging branches using git and bitbucket, resolving merge conflicts, making pull requests"
      ],
      technologies: [
        "React.js, Node.js, Sequelize, HTML, CSS, Bootstrap"
      ]
    }, {
      title: "Randomised Minecraft Village generator",
      year: "04/2022 - 05/2022",
      showcaseLink: "https://www.youtube.com/watch?v=y4icTPLqGlE",
      repoLink: "",
      description: [
        "Together with a group of 3 other students, we developed a program in Python which generates a randomised Minecraft village which fits into the terrain",
        "I was responsible for plot/terrain generation and editing the video",
      ],
      technologies: [
        "Python"
      ]
    }, {
      title: "Movie Recommended System Tuning",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "In this project, we chose a selection of machine learning algorithms from the... [FILL IN REST OF DETAILS]",
      ],
      technologies: [
        "Python, Numpy"
      ]
    }, {
      title: "Arduino Motion Sensor Room Lights (Hobby project)",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "In this project I used an Arduino hooked up to a motion sensor to create a motion activated room light.",
        "The plan was to have multiple motion sensors to detect presence in the room, combined with a light sensor to determine whether it is necessary to activate the light, and what the hue should be",
      ],
      technologies: [
        "Arduino, C++"
      ]
    },
  ];
  
  const [activeImg, setActiveImg] = useState <number>(0);

  const imgClass = "bannerImg offset";
  const imgClassSelected = "bannerImg offsetActive";

  const projectInfo = "projectInfo";
  const projectInfoHidden = "projectInfo hidden";
  
  function mouseHover(elemIndex:number) {
    setActiveImg(elemIndex);
  }

  return (
    <>
    <h2 className="portfolioTitle">View my projects below!</h2>
    <div className='pictureBox'>
        {imgArr.map((img, index) => (
          <>
            <img className={activeImg === index+1 ? imgClassSelected : imgClass} src={img} alt="Logo" onClick={activeImg === index+1 ? () => mouseHover(0) : () => mouseHover(index+1)}/>
            
            <div className={activeImg === index+1 ? projectInfo : projectInfoHidden}>
              <h2>{projectDescription[index].title}</h2>
              <p>{projectDescription[index].year}</p>
              <p>{projectDescription[index].description}</p>
              <p>Technologies Used: {projectDescription[index].technologies}</p>

            </div>
          </>
          ))
        }
    </div>
    </>
  );
}

export default MyProjects;