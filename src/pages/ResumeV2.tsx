import '../css/ResumePage.css';
import { motion } from "framer-motion"
import { useState } from 'react';
import {ReactComponent as VineImg} from '../assets/vine.svg';
import ForceDirectedGraph from '../page_components/ForceDirectedGraph';

function ResumeV2() {

        
        return (
          <>
          <div className='forceGraphBox'><ForceDirectedGraph/></div>
          
            
          </>
        );
      }
      
      export default ResumeV2;