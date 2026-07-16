import { useTranslations } from "next-intl";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function HeaderActivity(){
    const t = useTranslations('Header');
    return <div style={{
        display:"flex",
        marginRight:"50px" 
    }}>
    <FaRegUser size={20} title={t('userProfile')} style={{marginRight:"20px"}}/>
    <CiSearch size={20} title={t('search')} style={{marginRight:"20px"}}/>
    <CiHeart size={20} title={t('wishlist')} style={{marginRight:"20px"}} />
    <LuShoppingCart size={20} title={t('cart')} style={{marginRight:"20px"}}/>
    </div>
}