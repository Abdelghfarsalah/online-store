"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ButtonLink } from "./button";

export default function RegisterSectionDescription() {
    const t = useTranslations('Register');
    return <div > 
        <p style={{
            color:"#171923",
            fontWeight:"bold",
            fontSize:"48px",
            fontFamily:"intr",
        }}>{t('title')} </p>
        <div style={{
        display:"flex",
    }}>   
            <p style={{
            color:"#718096",
            fontSize:"18PX",
        }}>{t('haveAccount')}</p>
        <Link href="/login">
        
        <ButtonLink onclick={() => console.log("Create now clicked")} text={t('logIn')} />
        </Link>
        </div>
    </div>
}