
import SupportSection from "@/components/pages/login/components/SupportSection";
import RegisterSection from "@/components/pages/Register/components/RegisterSection";
import "@/components/pages/Register/styles/RegisterStyle.css";
export default function Register() {
    return <div className="Register-Page"> 
    <RegisterSection />
    <SupportSection />
    </div>
}