"use client"
import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useTranslations } from "next-intl";
import { LuPyramid } from "react-icons/lu";
import "../../styles/style.css";
import HeaderAction from "./headerAction";
import HeaderActivity from "./HeaderActivity";

export default function Header(){
    const t = useTranslations('Header');
    const {PrimaryColor}=usePrimaryColor();
    return <div className="home-header">
        <div className="header-icon">
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