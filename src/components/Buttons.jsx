import React from 'react'
 import { motion } from "framer-motion";

export default function Buttons({name}) {
  return (
 <>
        <motion.button className="btn bg-white h-12 w-28 rounded-[25px] shadow-orange-300"> {name}</motion.button>
 </>
   
  )
}
