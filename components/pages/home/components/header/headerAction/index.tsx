import { useTranslations } from "next-intl";
import HeaderActionButton from "./HeaderActionbutton";

export default function HeaderAction(){
    const t = useTranslations('Header');
    return <>
    <HeaderActionButton  title={t('home')} onClick={()=>{
        
    }}/>
    <HeaderActionButton  title={t('shop')} onClick={()=>{
        
    }}/>
    <HeaderActionButton  title={t('about')} onClick={()=>{
        
    }}/>
    <HeaderActionButton  title={t('contact')} onClick={()=>{
        
    }}/>
    </>
}