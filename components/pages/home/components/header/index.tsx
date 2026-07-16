"use client"
import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale, useTranslations } from "next-intl";
import { LuPyramid } from "react-icons/lu";
import "../../styles/style.css";
import HeaderAction from "./headerAction";
import HeaderActivity from "./HeaderActivity";

export default function Header(){
    const t = useTranslations('Header');
    const {PrimaryColor}=usePrimaryColor();
    const locale=useLocale();
    return <div className="home-header">
        <div style={{ 
            marginRight:locale=="en"?"10px" :"",
            marginLeft:locale=="ar"?"" :"10px",
        }} className="header-icon">
            <LuPyramid color={PrimaryColor} size={40}/>
            <p style={{
                fontSize:"34px",
                fontWeight:"bold",
                marginLeft:"10px"
            }}>{t('brandName')}</p>
        </div>
        <div className="header-action">
            <HeaderAction />
        </div>
        <div className="header-activity">
            <HeaderActivity />
        </div>
    </div>
}