import { ButtonLink } from "./button";

export default function ForgetPassword() {
    return <div className="forget-password" style={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px"
    }}> 
        <p style={{
            color:"#718096",
            fontSize:"16PX",
        }}> Remember me</p>
        <ButtonLink  onclick={() => console.log("Forget password clicked")} text="Forget Password" />
    </div>
}