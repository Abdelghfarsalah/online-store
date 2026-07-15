"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import CustomTextFormField from "./CustomTextForm";
import PasswordFormField from "./PasswordInput";
import { RegisterButton } from "./RegisterButton";

export default function CustomRegisterForm() {
    const t = useTranslations('Register');
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
        <CustomTextFormField placeholder={t('fullnamePlaceholder')} type="text" value={formValue.fullname} onChange={(value) => setFormValues({...formValue, fullname: value})} title={t('fullname')} />
        <CustomTextFormField placeholder={t('emailPlaceholder')} type="email" value={formValue.email} onChange={(value) => setFormValues({...formValue, email: value})} title={t('email')} />
        <PasswordFormField  placeholder={t('passwordPlaceholder')} value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title={t('password')} />
        <RegisterButton onClick={()=>{
            console.log(formValue)
        }}></RegisterButton>
    </form>
}