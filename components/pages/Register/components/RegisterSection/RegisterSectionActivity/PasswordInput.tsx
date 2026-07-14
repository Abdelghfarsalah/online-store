"use client"
import { inputFieldType } from "@/types/login";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function PasswordFormField({title,value,onChange,placeholder}:inputFieldType ) {
    const [showPassword, setShowPassword] = useState(false);
    return <div style={{
        marginTop:"20px"
        
    }}>
        <p style={{
            color:"#718096",
            fontSize:"16PX",
        }}> {title}</p>
        <div style={{
            border:"1px solid grey",
            borderRadius:"10px",
            marginTop:"10px",
            width:"100%",
            display:"flex",
            justifyContent:"space-between",
           
        }}>
            <input type={showPassword ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={{
            outline:"none",
            padding:"10px",
             flex:"3"
        ,height:"60px"
            }}/>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <div
            style={{
                height:"20px",
                borderLeft:"1px solid grey",
            }}></div>
            <button onClick={() => setShowPassword(!showPassword)} style={{
                background:"none",
                border:"none",
                cursor:"pointer",
                width:"20px",
                margin:"10px",
            }}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
            </div>
        </div>
       
    </div>
}