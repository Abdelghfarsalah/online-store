import LoginSection from "@/components/pages/login/components/LoginSection";
import SupportSection from "@/components/pages/login/components/SupportSection";
import "@/components/pages/login/styles/loginStyle.css";
export default function Login() {
    return <div className="login-Page"> 
    <LoginSection />
    <SupportSection />
    </div>
}