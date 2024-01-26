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
    title: string;
    year: string;
    showcaseLink: string;
    repoLink: string;
    description: string[];
    technologies: string;
  }
  
  let projectDescription: ProjectInfo[] = [
    {
      title: "24 hours programming challenge",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "This project was a 24 hour programming challenge, where we had to build a dog insurance calculator using react.",
      ],
      technologies: "React, Javascript, HTML, CSS",
    },
    {
      title: "Vending machine system using C++",
      year: "04/2023 - 05/2023",
      showcaseLink: "",
      repoLink: "https://gitfront.io/r/dario/NBW2Zdba6aRn/ATP-A2-m3/",
      description: [
        "Built a command prompt based vending machine system utilizing a range of data structures together in a team of 4.",
        "My role was primarily writing the Coins class, modifying the Linked List class to be doubly linked, as well as writing the initializeLinkedList method, which reads the data from the csv file.",
      ],
      technologies: "C++",
    }, 
    {
      title: "Full-Stack intra-firm social media website",
      year: "08/2022 - 10/2022",
      showcaseLink: "https://www.youtube.com/watch?v=XQgi2W60ChA",
      repoLink: "https://gitfront.io/r/dario/MPKj26XhX2BU/Assignment-2/",
      description: [
        "Social media style messaging website using developed in a team of two.",
        "My responsibilities were:",
        "- Developing the login and sign-up pages, including checking password requirements are met, encrypting passwords with Argon2, and storing user details in the MySQL database.",
        "- Developing the 'posts' page, including saving posts in the database, viewing other people's posts, editing or deleting own posts, as well as replying to posts.",
        "- Writing a series of unit tests using React Testing Library and Jest to test the website functionality."
      ],
      technologies: "React.js, Node.js, Express.js, Sequelize, MySQL, Jest, Argon2",
    }, 
    {
      title: "Randomised Minecraft Village generator",
      year: "04/2022 - 05/2022",
      showcaseLink: "https://www.youtube.com/watch?v=y4icTPLqGlE",
      repoLink: "",
      description: [
        "Together with a group of 3 other students, we developed a program in Python which generates a randomised Minecraft village which fits into the terrain.",
        "I was responsible for plot/terrain generation and editing the video.",
      ],
      technologies: "Python",
    }, 
    {
      title: "Movie Recommended System Tuning",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "In this project, we chose a selection of machine learning algorithms from the... [FILL IN REST OF DETAILS].",
      ],
      technologies: "Python, Numpy",
    }, 
    {
      title: "Arduino Motion Sensor Room Lights (Hobby project)",
      year: "",
      showcaseLink: "",
      repoLink: "",
      description: [
        "In this project I used an Arduino hooked up to a motion sensor to create a motion activated room light.",
        "The plan was to have multiple motion sensors to detect presence in the room, combined with a light sensor to determine whether it is necessary to activate the light, and what the hue should be.",
      ],
      technologies: "Arduino, C++",
    },
  ];
  
  const [activeImg, setActiveImg] = useState <number>(0);
  
  function mouseHover(elemIndex:number) {
    setActiveImg(elemIndex);
  }

  return (
    <>
    <h2 className="portfolioTitle">View my projects below!</h2>
    <div className='pictureBox'>
        {imgArr.map((img, index) => (
          <>
            <img className={activeImg === index+1 ? "bannerImg offsetActive" : "bannerImg offset"} src={img} alt="Portfolio Project" draggable="false" onClick={activeImg === index+1 ? () => mouseHover(0) : () => mouseHover(index+1)}/>
            
            <div className={activeImg === index+1 ? "projectInfo" : "projectInfo hidden"}>
              <h2>{projectDescription[index].title}</h2>
              <p>Date: {projectDescription[index].year}</p>
              {projectDescription[index].description.map((elem) => (
                <p>{elem}</p>
              ))}
              {projectDescription[index].technologies !== "" ? <p>Technologies Used: {projectDescription[index].technologies}</p> : null}
              {projectDescription[index].showcaseLink !== "" ? <p>Showcase Link: <a href={projectDescription[index].showcaseLink}>{projectDescription[index].showcaseLink}</a></p> : null}
              {projectDescription[index].repoLink !== "" ? <p>Repo Link: <a href={projectDescription[index].repoLink} target="_blank" rel="noopener noreferrer">{projectDescription[index].repoLink}</a></p> : null}
            </div>
          </>
          ))
        }
    </div>
    </>
  );
}

export default MyProjects;