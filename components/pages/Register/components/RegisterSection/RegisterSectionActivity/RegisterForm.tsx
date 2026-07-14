"use client"
import { useState } from "react";
import CustomTextFormField from "./CustomTextForm";
import PasswordFormField from "./PasswordInput";
import { RegisterButton } from "./RegisterButton";

export default function CustomRegisterForm() {
    const [formValue,setFormValues]=useState({
        email:"",
        password:"",
        fullname:"",
    })
    return <form onSubmit={(e)=>{
        e.preventDefault();
    }} style={{
        marginTop:"30PX"
    }}>
        <CustomTextFormField placeholder={"Abdelghfar salah"} type="text" value={formValue.fullname} onChange={(value) => setFormValues({...formValue, fullname: value})} title="Fullname" />
        <CustomTextFormField placeholder={"Exmaple@gmail.com"} type="email" value={formValue.email} onChange={(value) => setFormValues({...formValue, email: value})} title="E-mail" />
        <PasswordFormField  placeholder={"123456"} value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title="Password" />
        <RegisterButton onClick={()=>{
            console.log(formValue)
        }}></RegisterButton>
    </form>
}