import '../css/ResumePage.css';
import { motion } from "framer-motion"
import { useState } from 'react';
import {ReactComponent as VineImg} from '../assets/vine.svg';
import {ReactComponent as LeafImg} from '../assets/leaf.svg';

function ResumePage() {
        const [activeHover, setActiveHover] = useState<number>();    

        interface Experience {
            role: string;
            year: string;
            company: string;
            responsibilities: string[];
        }

        let experienceArr: Experience[] = [
            {
                role: "Junior Test Analyst - Internship", 
                year: "06/2023 - Present", 
                company:"JDR Software",
                responsibilities: [
                    "Automating test scripts using Javascript/Webdriver.io/Mocha/Chai",
                    "Creating and modifying test scripts to test bugs, raising and resolving jira bug tickets",
                    "Manual regression testing using testrail",
                    "Creating and merging branches using git and bitbucket, resolving merge conflicts, making pull requests"
                ]
            },
            {
                role: "Secretary - Volunteer", 
                year: "01/2023 - Present", 
                company:"RMIT Cycling Club",
                responsibilities: [
                    "Effectively communicate upcoming events and announcements with members via email, Facebook and Discord",
                    "Plan and coordinate fortnightly bicycle rides with up to ~20 participants",
                    "Cooperate with fellow committee members to guide the direction of the club and stay on top of tasks",
                ]
            },
            {
                role: "Treasurer - Volunteer", 
                year: "07/2022 - 12/2022", 
                company:"RMIT Cycling Club",
                responsibilities: [
                    "Ensured accurate and on-time financial reporting of club expenses and financial position",
                    "Made budget decisions (eg. which events we can hold, how much we can reimburse members with our available funds?)",
                    "During this time, was also involved in ride leading and planning",
                ]
            },
            {
                role: "IT Technician", 
                year: "05/2022 - 09/2022", 
                company:"Renew IT",
                responsibilities: [
                    "Engaged in data erasure (software erasure, as well as physical data destruction)",
                    "Identified hardware issues for devices including laptops, tablets etc",
                    "Cleaned & packed laptops, as well as entered stock into the inventory system",
                ]
            },
            {
                role: "Treasurer - Volunteer", 
                year: "07/2022 - 12/2022", 
                company:"RMIT Cycling Club",
                responsibilities: [
                    "Ensured accurate and on-time financial reporting of club expenses and financial position",
                    "Made budget decisions (eg. which events we can hold, how much we can reimburse members with our available funds?)",
                    "During this time, was also involved in ride leading and planning",
                ]
            },
            {
                role: "IT Technician", 
                year: "05/2022 - 09/2022", 
                company:"Renew IT",
                responsibilities: [
                    "Engaged in data erasure (software erasure, as well as physical data destruction)",
                    "Identified hardware issues for devices including laptops, tablets etc",
                    "Cleaned & packed laptops, as well as entered stock into the inventory system",
                ]
            },
            {
                role: "Treasurer - Volunteer", 
                year: "07/2022 - 12/2022", 
                company:"RMIT Cycling Club",
                responsibilities: [
                    "Ensured accurate and on-time financial reporting of club expenses and financial position",
                    "Made budget decisions (eg. which events we can hold, how much we can reimburse members with our available funds?)",
                    "During this time, was also involved in ride leading and planning",
                ]
            },
            {
                role: "IT Technician", 
                year: "05/2022 - 09/2022", 
                company:"Renew IT",
                responsibilities: [
                    "Engaged in data erasure (software erasure, as well as physical data destruction)",
                    "Identified hardware issues for devices including laptops, tablets etc",
                    "Cleaned & packed laptops, as well as entered stock into the inventory system",
                ]
            },
        ];

        const experienceBoxHover = {
            width: '20vw',
            height: '10vw',
            borderRadius: 20,
            borderColor: 'green',
            borderStyle: 'solid',
            marginBottom: '40px',
        }
        
        const experienceBoxUnhover = {
            width: '10vw',
            height: '10vw',
            borderRadius: 150,
            borderColor: 'hsl(25, 50, 25)',
            borderStyle: 'solid',
        }
        const variants = {
            open: { 
                borderColor: 'hsl(15, 130, 65)',
                scale: 1.1
            },
        }
        
        return (
          <>
          <div className='experienceGrid'>
          
            <VineImg className='vine'/>
            {
                experienceArr.map((elem, index) => (
                    <>
                        <div className='experienceBox' >
                            <motion.div  onMouseEnter={() => setActiveHover(index)} onMouseLeave={() => setActiveHover(-1)}
                                className='experienceContent'
                                initial={experienceBoxUnhover}
                                animate={activeHover == index ? experienceBoxHover : experienceBoxUnhover}
                                whileInView="open"
                                transition={{ ease: "easeOut", duration: 0.1 }}
                                viewport={{ once: false, amount: 1 }}
                                variants={variants}
                            >   
                                <h1>{elem.role}</h1>
                                <h2>{elem.company}</h2>
                                <h2>{elem.year}</h2>
                                <ul>
                                <h4>Responsibilities</h4>
                                    {activeHover == index ? elem.responsibilities.map((responsibility) => (
                                        <li>{responsibility}</li>
                                    )): ""}
                                </ul>
                            </motion.div>
                        </div>
                        {/* TODO: This should be temp. Probably better to assign absolute grid positions using similar formula to below */}
                        {(index) % 4 == 0 || (index) % 4 == 2 ? <><div className='experienceBox' ></div><div className='experienceBox' ></div></> : null} 
                    </>
                ))
            }
          </div>
          </>
        );
      }
      
      export default ResumePage;
      