"use client"
import { Button } from "@/components/ui/button";
import { SeetingBarType } from "@/types/redux";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

export function RegisterButton({onClick}:{onClick:()=>void}) {
    const t = useTranslations('Register');
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
  }}>{t('signUpButton')}</Button>
}
