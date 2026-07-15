"use client"
import { Button } from "@/components/ui/button"
import { PrimaryColor } from "@/constant/Colors"
import { SeetingBarType } from "@/types/redux";
import { useSelector } from "react-redux";

export function LoginButton({onClick}:{onClick:()=>void}) {
    const state = useSelector(
            (state: SeetingBarType) => state.SeetingBar.PrimaryColor
        );
  return <Button onClick={onClick} style={{
    backgroundColor:state,
    width:"100%",
    height:"60px",
    marginTop:"20px",
    fontSize:"20px",
    color:"white",
    borderRadius:"10px",
    fontWeight:"bold"
  }}>Sign in</Button>
}
