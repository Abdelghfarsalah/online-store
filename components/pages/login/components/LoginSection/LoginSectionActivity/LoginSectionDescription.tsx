"use client"
import { ButtonLink } from "./button";

export default function LoginSectionDescription() {
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
        }}>Don’t have an account?</p>
        <ButtonLink onclick={() => console.log("Create now clicked")} text="Create now" />
        </div>
    </div>
}