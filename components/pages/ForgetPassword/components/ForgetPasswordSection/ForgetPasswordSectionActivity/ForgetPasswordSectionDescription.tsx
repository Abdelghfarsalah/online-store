"use client"

import Link from "next/link"
import { ButtonLink } from "./button"

export default function ForgetPasswordSectionDescription() {
    return <div > 
        <p style={{
            color:"#171923",
            fontWeight:"bold",
            fontSize:"30px",
            fontFamily:"intr",
        }}>Forget Password </p>
        <div style={{
        display:"flex",
    }}>   
            <p style={{
            color:"#718096",
            fontSize:"18PX",
        }}>Reset Your Password Now.</p>
        <Link href="/login">
        
        <ButtonLink onclick={() => console.log("Create now clicked")} text="LOG IN "/>
        </Link>
        </div>
    </div>
}