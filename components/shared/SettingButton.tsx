"use client"
import { ShowSettingbar } from "@/redux/app/features/SettingButton/SettingButtonSlice";
import { SeetingBarType } from "@/types/redux";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
export default function SettingButton(){
    const locale=useLocale()
    const state=useSelector((state:SeetingBarType)=>state.SeetingBar.Show);
    const dispatch=useDispatch();
    return <div >
    <button onClick={()=>{
        dispatch(ShowSettingbar());
    }} style={{
        margin:"10px",
        display:state?"none":"block",
        position: "fixed",
        right:locale==="en"? 0:"",
        left:locale==="ar"? 0:"",
        top: 0,
        zIndex: 9999,
    }} >
        <motion.div transition={{
        duration:5,repeat: Infinity,
        type: "tween",                                                                                                                                                                                                                                                                                                                 
    }} animate={{
        rotate:360,
    }}>
        <CiSettings size={40} color="GREY" />
        </motion.div></button>
    </div>
}

