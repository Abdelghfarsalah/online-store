import Image from "next/image";
import { FaRobot } from "react-icons/fa";

export default function SupportSectionHeader(){
    return <div style={{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"20px"
    }}>
        <p style={{
            color:"#171923",
            fontSize:"18px",
            fontFamily:"intr",
            marginBottom:"50px",
           
            marginTop:"20px",
            display:"flex",
            alignItems:"center",
            gap:"10px"
        }}> <FaRobot color="white"/> <span style={
           {  color:"white",}
        }>Support</span></p>
        
       
       <Image
  src="/assets/images/main-right.png"
  alt="icon"
  width={500}
  height={500}
  style={{
    width: "70%",
    height: "80vh",
  }}
/>
    </div>
}