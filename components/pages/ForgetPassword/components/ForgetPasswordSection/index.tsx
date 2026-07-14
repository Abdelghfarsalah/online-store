
import "@/components/pages/login/styles/loginStyle.css";
import { ForgetPasswordSectionActivity } from "./ForgetPasswordSectionActivity/ForgetPasswordSectionActivity";
import ForgetPasswordSectionHeader from "./ForgetPasswordSectionHeader";
export default function RegisterSection() {
    return <div className="ForgetPassword-section"  style={{
        marginBottom:"20px"
    }}> 
    <ForgetPasswordSectionHeader />
    <ForgetPasswordSectionActivity />
    </div>
}