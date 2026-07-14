"use client"
import { useState } from "react";
import CustomTextFormField from "./CustomTextForm";
import ForgetPassword from "./ForgetPassword";
import PasswordFormField from "./PasswordInput";
import { LoginButton } from "./loginButton";

export default function CustomLoginForm() {
    const [formValue,setFormValues]=useState({
        email:"",
        password:""
    })
    return <form onSubmit={(e)=>{
        e.preventDefault();
    }} style={{
        marginTop:"30PX"
    }}>
        <CustomTextFormField type="email" value={formValue.email} onChange={(value) => setFormValues({...formValue, email: value})} title="E-mail" />
        <PasswordFormField value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title="Password" />
            <ForgetPassword></ForgetPassword>
        <LoginButton></LoginButton>
    </form>
}