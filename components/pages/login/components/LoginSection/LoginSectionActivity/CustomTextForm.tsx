import { inputFieldType } from "@/types/login";

export default function CustomTextFormField({title,value,onChange,type}:inputFieldType ) {
    return <div style={{
        marginTop:"20px"
        
    }}>
        <p style={{
            color:"#718096",
            fontSize:"16PX",
        }}> {title}</p>
        <input type={type || "text"} value={value} onChange={(e) => onChange(e.target.value)} placeholder={"example@gmail.com"} style={{
            outline:"1px grey solid",
            padding:"10px",
            borderRadius:"10px",
            marginTop:"10px",
            width:"100%"
        ,height:"60px"
        }}/>
    </div>
}