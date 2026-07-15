"use client"
import "@/components/pages/ForgetPassword/styles/ForgetPasswordStyle.css";
import SupportSectionHeader from "./SupportSectionHeader";
import { PrimaryColor } from "@/constant/Colors";
import { useSelector } from "react-redux";
import { SeetingBarType } from "@/types/redux";
export default function SupportSection() {
      const state = useSelector(
            (state: SeetingBarType) => state.SeetingBar.PrimaryColor
        );
    return <div className="support-section-ForgetPassword"    style={{
            backgroundColor:state
        }} > 
    <SupportSectionHeader />
    </div>
}