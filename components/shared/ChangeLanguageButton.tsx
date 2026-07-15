"use client"
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { SeetingBarType } from "@/types/redux";
import { useLocale } from "next-intl";
import { FaLanguage } from "react-icons/fa";
import { useSelector } from "react-redux";
import Switch from "react-switch";

export default function ChangeLangaugeButton(){
    const currentlocal=useLocale();
    const PrimaryColor = useSelector((state: SeetingBarType) => state.SeetingBar.PrimaryColor);
    const { changeLanguage } = useChangeLanguage();
    
    const isEnglish = currentlocal === "en";
    
    return <div
    style={{
        marginTop: "35px",
    direction:"ltr",
    }}
    >
    <h3
        style={{
        marginBottom: "18px",
        color: "#6B7280",
        fontWeight: 600,
        }}
    >
        Language
    </h3>

    <div
        style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#F8FAFC",
        padding: "12px 16px",
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        }}
    >
        <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
        }}
        >
        <FaLanguage color="#6366F1" size={20} />
        <span
            style={{
            fontWeight: 600,
            color: "#374151",
            }}
        >EN
        </span>
        </div>
           <div onClick={()=>{
                changeLanguage(isEnglish ? "ar" : "en");
            }} >
             <Switch onColor={PrimaryColor} onChange={()=>changeLanguage(isEnglish ? "ar" : "en")} checked={!isEnglish} />
           </div>
        <span
        style={{
            fontWeight: 600,
            color: "#374151",
        }}
        >AR</span>
        </div>
        </div>
}