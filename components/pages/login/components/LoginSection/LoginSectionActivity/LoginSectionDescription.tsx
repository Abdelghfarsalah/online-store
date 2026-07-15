"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ButtonLink } from "./button";

export default function LoginSectionDescription() {
    const t = useTranslations('Login');
    return <div > 
        <p style={{
            color:"#171923",
            fontWeight:"bold",
            fontSize:"48px",
            fontFamily:"intr",
        }}>Sign in </p>
        <div style={{
        display:"flex",
    }}>   
            <p style={{
            color:"#718096",
            fontSize:"18PX",
        }}>{t('dontHaveAccount')}</p>
        <Link href="/Register">
                
                <ButtonLink onclick={() => console.log("Create now clicked")} text={t('createNow')}/>
                </Link>
        
        </div>
    </div>
}