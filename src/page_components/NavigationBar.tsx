import { useNavigate, useLocation } from "react-router-dom"
import '../css/NavigationBar.css';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';

function NavigationBar() {
    const [progress, setProgress] = useState("-100%");
    const [delay, setDelay] = useState(0.6);
    let location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "":
                setProgress("-90%");
                break;

            case "/home":
                setProgress("-90%");
                break;
        
            case "/wordGuess":
                setProgress("-70%");
                break;

            case "/projects":
                setProgress("-50%");
                break;

            case "/resume":
                setProgress("-30%");
                break;

            case "/about-me":
                setProgress("-10%");
                break;
        }
    }, [location]);
    
    const navigate = useNavigate();
    const navLinks = [
        {text: "Home", path:"/home"},
        {text: "Word Guesser", path:"/wordGuess"},
        {text: "Projects", path:"/projects"},
        {text: "Resume", path:"/resume"},
        {text: "About Me", path:"/resume"},
    ]

    function navHandler(navObj:{text:string, path:string }) {
        setDelay(0);
        navigate(navObj.path)
    }
    
    return(
        <>
            <div className="navBarGrid">
                <div className='navBarLine'>
                <motion.div className='navLineMask'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [.34,.03,.09,1.07], delay: 0.2 }}
                    variants={{
                    visible: { left: '100%'},
                    hidden: { left: '0%' }
                    }} 
                >
                </motion.div>         
                <motion.div className='navLineMask'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [.34,.03,.09,1.07], delay: 0.4  }}
                    variants={{
                    visible: { left: '100%'},
                    hidden: { left: '0%' }
                    }} 
                >
                </motion.div>         
                </div>
                {navLinks.map((obj, index) => <h5 className="linkText" style={{gridColumn: index+1, gridRow: (index) % 2 === 0 ? "1" : "3"}} onClick={() => navHandler(obj)}>{obj.text}</h5>)}
                <motion.div className='navBarMask'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [.34,.03,.09,1.07] }}
                    variants={{
                    visible: { left: '100%'},
                    hidden: { left: '0%' }
                    }} 
                >
                </motion.div>
                <motion.div className='navBarProgress'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [.34,.03,.09,1.07], delay: delay }}
                    variants={{
                    visible: { left: progress},
                    hidden: { left: '-100%' }
                    }}
                >
                </motion.div>
            </div>
        
        </>
    );
};
export default NavigationBar;