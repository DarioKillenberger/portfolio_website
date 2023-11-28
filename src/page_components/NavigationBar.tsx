import { useNavigate } from "react-router-dom"
import '../css/NavigationBar.css';
import { motion } from "framer-motion"

function NavigationBar() {
    const navigate = useNavigate();
    const navLinks = [
        {text: "Home", path:"/home"},
        {text: "Word Guesser", path:"/wordGuess"},
        {text: "Projects", path:"/projects"},
        {text: "Resume", path:"/resume"},
        {text: "About Me", path:"/resume"},
    ]
    
    return(
        <>
            <div className="navBarGrid">
                <div className='navBarLine'></div>
                {navLinks.map((obj, index) => <h5 className="linkText" style={{gridColumn: index+1, gridRow: (index) % 2 === 0 ? "1" : "3"}} onClick={() => navigate(obj.path)}>{obj.text}</h5>)}
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
                <motion.div className='navBarMask'
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
                <motion.div className='navBarMask'
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
        
        </>
    );
};
export default NavigationBar;