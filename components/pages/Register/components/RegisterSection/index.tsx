
import "@/components/pages/login/styles/loginStyle.css";
import { RegisterSectionActivity } from "./RegisterSectionActivity/RegisterSectionActivity";
import RegisterSectionHeader from "./RegisterSectionHeader";
export default function RegisterSection() {
    return <div className="Register-section" style={{
        marginBottom:"20px"
    }}> 
    <RegisterSectionHeader />
    <RegisterSectionActivity />
    </div>
}