import ForgetPasswordSectionDescription from "./ForgetPasswordSectionDescription";
import CustomForgetPasswordForm from "./RegisterForm";

export function ForgetPasswordSectionActivity() {
  return <div  className="Register-section-activity" style={{
     marginLeft:"20px",
      marginTop:"20px",
  }}  >
  
    <ForgetPasswordSectionDescription />
    <CustomForgetPasswordForm />
    
    {/* <CustomContinueWithButton  title="Continue with Google" ><FcGoogle style={{ fontSize: "25px" }} /></CustomContinueWithButton>
    <CustomContinueWithButton  title="Continue with Facebook" ><FaFacebook style={{ fontSize: "25px", color: "#1877F2" }} /></CustomContinueWithButton> */}
    </div>
}
