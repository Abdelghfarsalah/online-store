"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import CustomTextFormField from "./CustomTextForm";
import ForgetPassword from "./ForgetPassword";
import PasswordFormField from "./PasswordInput";
import { LoginButton } from "./loginButton";

export default function CustomLoginForm() {
    const t = useTranslations('Login');
    const [formValue,setFormValues]=useState({
        email:"",
        password:""
    })
    return <form onSubmit={(e)=>{
        e.preventDefault();
    }} style={{
        marginTop:"30PX"
    }}>
        <CustomTextFormField placeholder={t('emailPlaceholder')} type="email" value={formValue.email} onChange={(value) => setFormValues({...formValue, email: value})} title={t('email')} />
        <PasswordFormField placeholder={t('passwordPlaceholder')} value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title={t('password')} />
            <ForgetPassword></ForgetPassword>
        <LoginButton onClick={()=>{
            console.log(formValue)
        }}></LoginButton>
    </form>
}