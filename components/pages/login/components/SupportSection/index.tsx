"use client"
import { SeetingBarType } from "@/types/redux";

import "@/components/pages/login/styles/loginStyle.css";

import { useSelector } from "react-redux";
import SupportSectionHeader from "./SupportSectionHeader";
export default function SupportSection() {
    const state = useSelector(
            (state: SeetingBarType) => state.SeetingBar.PrimaryColor
        );
   
    return <div className="support-section" style={{
        backgroundColor:state
    }}  > 
    <SupportSectionHeader />
    </div>
}