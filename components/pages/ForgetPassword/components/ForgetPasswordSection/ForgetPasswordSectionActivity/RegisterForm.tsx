"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ForgetPasswordButton } from "./ForgetPasswordButton";
import PasswordFormField from "./PasswordInput";

export default function CustomForgetPasswordForm() {
    const t = useTranslations('ForgetPassword');
    const [formValue,setFormValues]=useState({

        password:"",
        newPassword:"",
    })
    return <form onSubmit={(e)=>{
        e.preventDefault();
    }} style={{
        marginTop:"30PX"
    }}>
       
        <PasswordFormField  placeholder={t('passwordPlaceholder')} value={formValue.password}
            onChange={(value) => setFormValues({...formValue, password: value})}
            title={t('currentPassword')} /> 
             <PasswordFormField  placeholder={t('newPasswordPlaceholder')} value={formValue.newPassword}
            onChange={(value) => setFormValues({...formValue, newPassword: value})}
            title={t('newPassword')} />
        <ForgetPasswordButton onClick={()=>{
            console.log(formValue)
        }}></ForgetPasswordButton>
    </form>
}