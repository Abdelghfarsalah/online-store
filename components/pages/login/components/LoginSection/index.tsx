
import "@/components/pages/login/styles/loginStyle.css";
import { LoginSectionActivity } from "./LoginSectionActivity/loginSectionActivity";
import LoginSectionHeader from "./loginSectionHeader";
export default function LoginSection() {
    return <div className="login-section" > 
    <LoginSectionHeader />
    <LoginSectionActivity />
    </div>
}