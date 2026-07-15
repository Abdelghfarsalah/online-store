"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MousePointer(){
    const [x,setX]=useState(-40);
    const [y,setY]=useState(-40);

    useEffect(()=>{
        const handleMouseMove=(e:MouseEvent)=>{
            setX(e.clientX-20)
            setY(e.clientY-20);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    },[]);

    return <motion.div  animate={{x,y,}} style={{
        position:"absolute",
        zIndex:2000,
        pointerEvents:"none",
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        border:"2px grey solid"
    }} >
    </motion.div>
}