"use client";
import { motion, useReducedMotion } from "framer-motion";
export function PageTransition({children}:{children:React.ReactNode}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45,ease:[.2,.8,.2,1]}}>{children}</motion.div>}
