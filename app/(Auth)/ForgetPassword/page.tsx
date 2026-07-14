import ForgetPasswordSection from "@/components/pages/ForgetPassword/components/ForgetPasswordSection";
import SupportSection from "@/components/pages/ForgetPassword/components/SupportSection";
import "@/components/pages/ForgetPassword/styles/ForgetPasswordStyle.css";
export default function ForgetPassword() {
    return <div className="ForgetPassword-Page"> 
    <ForgetPasswordSection />
    <SupportSection  />
    </div>
}