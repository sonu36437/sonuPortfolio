import React from 'react'
import { motion } from "framer-motion";
import Buttons from './Buttons';
const btns=[{name:"Linkdin"},{name:"Github"},{name:"Mail"}]

export default function Nav() {
  return (
  <motion.div initial={{x:400,opacity:0}} animate={{opacity:1,x:0}} transition={{duration:2}}>
    <div className="btn flex absolute left-[70%] gap-5 top-2">
        {btns.map((btn)=>{
          return  <Buttons name={btn.name}/>
        })}
       
    </div>
  </motion.div>
  )
}
