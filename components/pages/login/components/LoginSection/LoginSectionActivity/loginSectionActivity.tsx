import { useTranslations } from "next-intl";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import CustomContinueWithButton from "./CustomContinueWithButton";
import { Line } from "./line";
import CustomLoginForm from "./LoginForm";
import LoginSectionDescription from "./LoginSectionDescription";

export function LoginSectionActivity() {
  const t = useTranslations('Login');
  return <div  className="login-section-activity" style={{
     marginLeft:"20px",
      marginTop:"20px",
  }}  >
  
    <LoginSectionDescription />
    <CustomLoginForm />
    <Line />
    <CustomContinueWithButton  title={t('continueWithGoogle')} ><FcGoogle style={{ fontSize: "25px" }} /></CustomContinueWithButton>
    <CustomContinueWithButton  title={t('continueWithFacebook')} ><FaFacebook style={{ fontSize: "25px", color: "#1877F2" }} /></CustomContinueWithButton>
    </div>
}
