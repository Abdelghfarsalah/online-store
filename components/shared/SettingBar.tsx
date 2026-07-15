"use client"

import { colors } from "@/constant/Colors";
import { ChangeColor, hideSettingBar } from "@/redux/app/features/SettingButton/SettingButtonSlice";
import { SeetingBarType } from "@/types/redux";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function SettingBar() {
    const state = useSelector(
        (state: SeetingBarType) => state.SeetingBar.Show
    );
    const dispatch = useDispatch();

    return (
        <div
        className="SettingBar"
        style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "320px",
            height: "100vh",
            background: "#fff",
            boxShadow: "-8px 0 25px rgba(0,0,0,.15)",
            zIndex: 1000,
            display: state ? "block" : "none",
            padding: "25px",
        }}
        >
        {/* Header */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
            }}
        >
            <h2
          style={{
            color: "#6B7280",
            fontWeight: 600,
            fontSize:"22px"
            }}
            >
            Settings
            </h2>

            <button
             style={{
            color: "#6B7280",
            fontWeight: 600,
            }}
             onClick={()=>{
                    dispatch(hideSettingBar());
                    console.log(state)
                }} 
            >
            <IoClose size={30} />
            </button>
        </div>

        {/* Colors */}
        <h3
            style={{
            marginBottom: "18px",
            color: "#6B7280",
            fontWeight: 600,
            }}
        >
            Colors
        </h3>

        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "15px",
            }}
        >
            {colors.map((color) => (
            <button
                key={color}
                style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                border: "2px solid #E5E7EB",
                background: color,
                cursor: "pointer",
                }}
                onClick={()=>{
                    dispatch(ChangeColor(color));
                    dispatch(hideSettingBar());
                }}  
            />
            ))}
        </div>
        </div>
    );
}