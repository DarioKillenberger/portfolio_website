import '../css/AboutMePage.css';
import { motion } from "framer-motion"
import DownArrow from '../page_components/downArrow';

var img1 = require('../assets/portrait.jpg');

function AboutMePage() {

    interface AboutMe {
        title: string;
        year: string;
        details: string;
        contents: string[];
    }

    let aboutMeArr: AboutMe[] = [
        {
            title: "About Me:", 
            year: "", 
            details:"",
            contents: [
                "I am an RMIT Software Engineering student currently in my penultimate year. I am a keen programmer, history nerd, cyclist, and just generally have too many hobbies.",
                "While I am currently interning as a Junior Test Analyst, I am always keen to expand my knowledge and make a real positive impact on the world.",
            ]
        },
        {
            title: "Experience:", 
            year: "06/2023 - Present", 
            details:"Junior Test Analyst - JDR Software (Internship)",
            contents: [
                "Automating test scripts using javascript/webdriver.io/mocha/chai",
                "Creating and modifying test scripts to test bugs, raising and resolving jira bug tickets",
                "Manual regression testing using testrail",
                "Creating and merging branches using git and bitbucket, resolving merge conflicts, making pull requests"
            ]
        },
        {
            title: "", 
            year: "07/2022 - Present", 
            details:"President (Former Secretary) - RMIT Cycling Club (Volunteer)",
            contents: [
                "Effectively communicate upcoming events and announcements with members via email, Facebook and Discord",
                "Plan and coordinate fortnightly bicycle rides with up to ~20 participants",
                "Cooperate with fellow committee members to guide the direction of the club and stay on top of tasks",
            ]
        },
    ];


    const variants = {
        hidden: { 
            opacity: 0,
        },
        visible: { 
            opacity: 1,
        },
    }

    return (
        <>
        <div className='aboutMeWrapper'>

            <div className='aboutMeContent'></div>

            <motion.div
                className='aboutHeader'
                initial="hidden"
                whileInView="visible"
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: false, amount: "all", margin: "-15% 0px -15% 0px" }}
                variants={variants}
            >
                <img src={img1} alt="Headshot" width="200" height="200" className='portraitImg'></img>
                <h1>Hello! I'm Dario</h1>
                <h2>But who am I really?</h2>
                <h2>Multi-Hobbyist, Creative Thinker, Quiet Enthusiast</h2>
                <DownArrow/>
            </motion.div>

            {aboutMeArr.map((elem, index) => (
                <>
                    <motion.div
                        className='aboutMeContent'
                        initial="hidden"
                        whileInView="visible"
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        viewport={{ once: false, amount: "all", margin: "-15% 0px -15% 0px" }}
                        variants={variants}
                    >
                        {elem.title !== "" ? <h3>{elem.title}</h3> : null}

                        <div className='expWrapper'>
                            {elem.details !== "" ? <h4 className='leftTitle'>{elem.details}</h4> : null}
                            {elem.year !== "" ? <h4 className='rightTitle'>{elem.year}</h4> : null}
                        </div>
                        
                        {elem.contents.map((elem) => (<p>{elem}</p>))}
                    </motion.div>
                </>
            ))}
            
        </div>
        
        </>
    );
}
      
export default AboutMePage;