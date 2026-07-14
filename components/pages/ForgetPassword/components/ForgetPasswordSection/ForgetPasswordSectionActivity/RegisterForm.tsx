"use client"
import { useState } from "react";
import { ForgetPasswordButton } from "./ForgetPasswordButton";
import PasswordFormField from "./PasswordInput";

export default function CustomForgetPasswordForm() {
    const [formValue,setFormValues]=useState({

        password:"",
        newPassword:"",
    })
    return <form onSubmit={(e)=>{
        e.preventDefault();
    }} style={{
        marginTop:"30PX"
    }}>
       
        <PasswordFormField  placeholder={"123456"} value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title="Curretn Password" /> 
             <PasswordFormField  placeholder={"123456"} value={formValue.newPassword}
            onChange={(value) => setFormValues({...formValue, newPassword: value})}
            title="New Password" />
        <ForgetPasswordButton onClick={()=>{
            console.log(formValue)
        }}></ForgetPasswordButton>
    </form>
}