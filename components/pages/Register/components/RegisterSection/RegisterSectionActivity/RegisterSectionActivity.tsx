import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import CustomContinueWithButton from "./CustomContinueWithButton";
import CustomLoginForm from "./RegisterForm";
import RegisterSectionDescription from "./RegisterSectionDescription";

export function RegisterSectionActivity() {
  return <div  className="Register-section-activity" style={{
     marginLeft:"20px",
      marginTop:"20px",
  }}  >
  
    <RegisterSectionDescription />
    <CustomLoginForm />
    
    <CustomContinueWithButton  title="Continue with Google" ><FcGoogle style={{ fontSize: "25px" }} /></CustomContinueWithButton>
    <CustomContinueWithButton  title="Continue with Facebook" ><FaFacebook style={{ fontSize: "25px", color: "#1877F2" }} /></CustomContinueWithButton>
    </div>
}
