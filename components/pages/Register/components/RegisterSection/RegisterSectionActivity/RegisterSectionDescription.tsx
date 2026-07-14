"use client"
import Link from "next/link";
import { ButtonLink } from "./button";

export default function RegisterSectionDescription() {
    return <div > 
        <p style={{
            color:"#171923",
            fontWeight:"bold",
            fontSize:"48px",
            fontFamily:"intr",
        }}>Sign Up </p>
        <div style={{
        display:"flex",
    }}>   
            <p style={{
            color:"#718096",
            fontSize:"18PX",
        }}>Do you have an account?</p>
        <Link href="/login">
        
        <ButtonLink onclick={() => console.log("Create now clicked")} text="LOG IN "/>
        </Link>
        </div>
    </div>
}