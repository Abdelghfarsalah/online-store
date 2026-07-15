import { useTranslations } from "next-intl";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import CustomContinueWithButton from "./CustomContinueWithButton";
import CustomLoginForm from "./RegisterForm";
import RegisterSectionDescription from "./RegisterSectionDescription";

export function RegisterSectionActivity() {
  const t = useTranslations('Register');
  return <div  className="Register-section-activity" style={{
     marginLeft:"20px",
      marginTop:"20px",
  }}  >
  
    <RegisterSectionDescription />
    <CustomLoginForm />
    
    <CustomContinueWithButton  title={t('continueWithGoogle')} ><FcGoogle style={{ fontSize: "25px" }} /></CustomContinueWithButton>
    <CustomContinueWithButton  title={t('continueWithFacebook')} ><FaFacebook style={{ fontSize: "25px", color: "#1877F2" }} /></CustomContinueWithButton>
    </div>
}
