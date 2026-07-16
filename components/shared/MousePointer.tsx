"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MousePointer(){
    const [x,setX]=useState(-50);
    const [y,setY]=useState(-50);

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

    return <motion.div  
        animate={{x,y}} 
        transition={{type: "spring", stiffness: 500, damping: 28}}
        style={{
        position:"fixed",
        top:0,
        left:0,
        zIndex:2000,
        pointerEvents:"none",
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        border:"2px grey solid"
    }} >
    </motion.div>
}