import { useNavigate, useLocation } from "react-router-dom"
import '../css/NavigationBar.css';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';

interface NavLinks {
    text: string,
    path: string
}

function NavigationBar({ navLinks }: { navLinks: NavLinks[] }) {
    const navigate = useNavigate();
    const [progress, setProgress] = useState("100%");
    const [delay, setDelay] = useState(0.6);
    let location = useLocation();

    // Hook which runs each time the browser url changes. Updates the navigation progress bar based on the url
    useEffect(() => {
        let progress = 100 / navLinks.length
        let startPosition = 100 - progress / 2

        for (let index = 0; index < navLinks.length; index++) {
            if (location.pathname === "/") {
                setProgress(`${startPosition}%`);
                break;
            }
            else if (location.pathname === navLinks[index].path) {
                setProgress(`${startPosition - (index * progress)}%`);
                break;
            }
        }
    }, [location, navLinks]);

    // Sets the animation delay to 0 and navigates to target when a page link in the navbar is clicked. 
    // We want the animation delay to be 0.6 on page load, but then instant if the user navigates to a different page after. 
    function navHandler(navObj: { text: string, path: string }) {
        setDelay(0);
        navigate(navObj.path)
    }

    return (
        <>
            <div className="navBarGrid" style={{ gridTemplateColumns: `repeat(${navLinks.length}, ${75 / navLinks.length}vw)` }}> {/* Adjust navBar text spacing automatically depending on how many elements */}
                <div className='navBarLine'>
                    <motion.div className='navLineMask'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: [.34, .03, .09, 1.07], delay: 0.2 }}
                        variants={{
                            visible: { left: '100%' },
                            hidden: { left: '0%' }
                        }}
                    >
                    </motion.div>
                    <motion.div className='navLineMask'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: [.34, .03, .09, 1.07], delay: 0.4 }}
                        variants={{
                            visible: { left: '100%' },
                            hidden: { left: '0%' }
                        }}
                    >
                    </motion.div>
                    <motion.div className='navLineProgress'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: [.34, .03, .09, 1.07], delay: delay }}
                        variants={{
                            visible: { right: progress },
                            hidden: { right: '100%' }
                        }}
                    >
                    </motion.div>
                </div>
                <motion.div className='navBarMask'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [.34, .03, .09, 1.07] }}
                    variants={{
                        visible: { left: '100%' },
                        hidden: { left: '0%' }
                    }}
                >
                </motion.div>

                {navLinks.map((obj, index) => <h5 className="linkText" style={{ gridColumn: index + 1, gridRow: (index) % 2 === 0 ? "1" : "3" }} onClick={() => navHandler(obj)}>{obj.text}</h5>)}
            </div>
        </>
    );
};
export default NavigationBar;