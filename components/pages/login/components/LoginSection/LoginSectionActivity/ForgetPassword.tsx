import { useTranslations } from "next-intl";
import Link from "next/link";
import { ButtonLink } from "./button";

export default function ForgetPassword() {
    const t = useTranslations('Login');
    return <div className="forget-password" style={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px"
    }}> 
        <p style={{
            color:"#718096",
            fontSize:"16PX",
        }}> {t('rememberMe')}</p>
        <Link href="/ForgetPassword">
        <ButtonLink  onclick={() => console.log("Forget password clicked")} text={t('forgetPassword')} />
        </Link>
    </div>
}