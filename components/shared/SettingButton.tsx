"use client"
import { ShowSettingbar } from "@/redux/app/features/SettingButton/SettingButtonSlice";
import { SeetingBarType } from "@/types/redux";
import { motion } from "framer-motion";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export default function SettingButton(){
    const state=useSelector((state:SeetingBarType)=>state.SeetingBar.Show);
    const dispatch=useDispatch();
    return <>
    <button onClick={()=>{
        dispatch(ShowSettingbar());
        console.log(state)
    }} style={{
        margin:"10px",
        display:state?"none":"block"
    }} className="setting">
        <motion.div transition={{
        duration:2,repeat: Infinity,
        type: "tween",                                                                                                                                                                                                                                                                                                                 
    }} animate={{
        rotate:360,
    }}>
        <CiSettings size={40} color="yellow" />
        </motion.div></button>
    </>
}