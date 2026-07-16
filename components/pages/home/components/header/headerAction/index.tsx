import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import HeaderActionButton from "./HeaderActionbutton";

export default function HeaderAction(){
    const t = useTranslations('Header');
    const locale = useLocale() ?? "en";

    return <>
    <Link href={`/${locale}/Home`}>
      <HeaderActionButton title={t('home')} onClick={()=>{}} />
    </Link>
    <Link href={`/${locale}/Home`}>
      <HeaderActionButton title={t('shop')} onClick={()=>{}} />
    </Link>
    <Link href={`/${locale}/About`}>
      <HeaderActionButton title={t('about')} onClick={()=>{}} />
    </Link>
    <Link href={`/${locale}/Contact`}>
      <HeaderActionButton title={t('contact')} onClick={()=>{}} />
    </Link>
    </>
}