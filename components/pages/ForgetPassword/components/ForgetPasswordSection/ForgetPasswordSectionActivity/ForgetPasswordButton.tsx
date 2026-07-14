"use client"
import { Button } from "@/components/ui/button"

export function ForgetPasswordButton({onClick}:{onClick:()=>void}) {
  return <Button onClick={onClick} style={{
    backgroundColor:"#1C4532",
    width:"100%",
    height:"60px",
    marginTop:"20px",
    fontSize:"20px",
    color:"white",
    borderRadius:"10px",
    fontWeight:"bold"
  }}>Reset</Button>
}
