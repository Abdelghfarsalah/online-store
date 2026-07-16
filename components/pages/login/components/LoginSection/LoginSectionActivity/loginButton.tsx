"use client"
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SeetingBarType } from "@/types/redux";
import { useLocale, useTranslations } from "next-intl";
import { useSelector } from "react-redux";

export function LoginButton({onClick}:{onClick:()=>void}) {
    const t = useTranslations('Login');
    const state = useSelector(
            (state: SeetingBarType) => state.SeetingBar.PrimaryColor
        );
    const locale=useLocale();
  return <Link href={`/Home`}>
  <Button onClick={onClick} style={{
    backgroundColor:state,
    width:"100%",
    height:"60px",
    marginTop:"20px",
    fontSize:"20px",
    color:"white",
    borderRadius:"10px",
    fontWeight:"bold"
  }}>{t('signInButton')}</Button>
  </Link>
}
