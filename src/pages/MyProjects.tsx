import { useState, useRef } from 'react';
import '../css/MyProjects.css';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

var img1 = require('../assets/creative_therapies_website.png');
var img2 = require('../assets/sharemaps.webp');
var img3 = require('../assets/3d_prints.jpg');
var img4 = require('../assets/c++_vendingMachine.png');
var img5 = require('../assets/social_website.webp');
var img6 = require('../assets/minecraft_terrainGen.jpg');
var img7 = require('../assets/movieRecommenderTuning.png');
var img8 = require('../assets/arduinoLED.JPG');
var img9 = require('../assets/dogInsurance_24hour.png');

var sl_img1 = require('../assets/slide_images/chess_board.jpg');
var sl_img2 = require('../assets/slide_images/3d_chessboard.jpg');
var sl_img3 = require('../assets/slide_images/desk_organizer.jpg');
var sl_img4 = require('../assets/slide_images/desk_organizer_top.jpg');
var sl_img5 = require('../assets/slide_images/microscope.jpg');
var sl_img6 = require('../assets/slide_images/Microscope_3d.jpg');
var sl_img7 = require('../assets/slide_images/mic_stand.jpg');
var sl_img8 = require('../assets/slide_images/steering_wheel_partial.jpg');
var sl_img9 = require('../assets/slide_images/steering_wheel_print.jpg');
var sl_img10 = require('../assets/slide_images/racing_wheel.jpg');
var sl_img11 = require('../assets/slide_images/pc_open_case.jpg');
var sl_img12 = require('../assets/slide_images/cog_print.jpg');

let imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
let projectSlides = [[],[],
    [
    sl_img1,
    sl_img2,
    sl_img3,
    sl_img4,
    sl_img5,
    sl_img6,
    sl_img7,
    sl_img8,
    sl_img9,
    sl_img10,
    sl_img11,
    sl_img12
    ],
    [],[],[],[],[],[]];

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
            title: "Creative Therapies Website for Client",
            year: "2024",
            showcaseLink: "https://creativetherapieskirsten.com.au/",
            repoLink: "",
            description: [
                "In this project, I built a business website for a client using SvelteKit and Tailwind CSS. It is fully responsive, with a separate mobile layout where needed.",
                "The website is designed to provide information about the business; creative therapies, especially arts therapy; and to act as a platform for customers to book sessions.",
                "Session booking is handled by integrating Cal.com.",
            ],
            technologies: "SvelteKit, Javascript, HTML, CSS",
        },
        {
            title: "Sharemaps WIP",
            year: "2024 - Current",
            showcaseLink: "https://sharemaps.net/",
            repoLink: "",
            description: [
                "In this project, I am trying to build a platform to enable easier creation and sharing of maps with friends, the public, or within organizations.",
                "It is still very early stage, so more details and features will come in the future.",
            ],
            technologies: "SvelteKit, TailwindCSS, DaisyUI, Javascript, HTML, CSS",
        },
        {
            title: "3d Print Projects (Hobby project)",
            year: "",
            showcaseLink: "",
            repoLink: "",
            description: [
                "This is a collection of the 3d projects I have created in the past.",
                "They include an arduino based racing wheel, a microphone stand, a microscope stand, a chessboard, and a few other projects.",
            ],
            technologies: "Fusion 360, 3d Printing",
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
            title: "Movie Recommender System Tuning",
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
    ];

    const [activeImg, setActiveImg] = useState<number>(0);

    function mouseHover(elemIndex: number, active: boolean) {
        if (active) {
            setActiveImg(0);
        } else {
            setActiveImg(elemIndex);
        }
        setTimeout(() => {
            scrollContentRef.current[elemIndex-1].scrollIntoView({ block: 'center' });
        }, 0.3);   
    }

    function SwiperComponent(elemIndex: number) {
        
        
        return (
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onClick={activeImg === elemIndex + 1 ? () => mouseHover(elemIndex + 1, true) : () => mouseHover(elemIndex + 1, false)}
            >
                {projectSlides[elemIndex].map((img) => (
                    <>
                    <SwiperSlide><img className='swiperImg' src={img} alt="Portfolio Project" draggable="false" /></SwiperSlide>
                    </>
                ))}

            </Swiper>
        )
        
    }

    const scrollContentRef = useRef<HTMLDivElement[]>([]);

    return (
        <>
            <h2 className="portfolioTitle">View my projects below!</h2>
            <div className='pictureBox'>
                {imgArr.map((img, index) => (
                    <>
                        <div className={activeImg === index + 1 ? "projectCard offsetActive" : "projectCard offset"} ref={(element: HTMLDivElement) => scrollContentRef.current[index] = element}>
                            {activeImg === index + 1 && projectSlides[index].length > 0 ? SwiperComponent(index) : 
                                <img className="bannerImg" src={img} alt="Portfolio Project" draggable="false" onClick={activeImg === index + 1 ? () => mouseHover(index + 1, true) : () => mouseHover(index + 1, false)} />
                            }
                            <div className={activeImg === index + 1 ? "projectName hidden" : "projectName"}>{projectDescription[index].title}
                            </div>
                        </div>
                        <div className={activeImg === index + 1 ? "projectInfo" : "projectInfo hidden"}>
                            <h2>{projectDescription[index].title}</h2>
                            <p>Date: {projectDescription[index].year}</p>
                            {projectDescription[index].description.map((elem) => (
                                <p>{elem}</p>
                            ))}
                            {projectDescription[index].technologies !== "" ? <p>Technologies Used: {projectDescription[index].technologies}</p> : null}
                            {projectDescription[index].showcaseLink !== "" ? <p>Showcase Link: <a href={projectDescription[index].showcaseLink} target="_blank" rel="noopener noreferrer">{projectDescription[index].showcaseLink}</a></p> : null}
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