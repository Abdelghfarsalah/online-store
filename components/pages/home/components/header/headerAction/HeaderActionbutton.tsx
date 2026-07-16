import { HeaderActionButtontype } from "@/types/home";

export default function HeaderActionButton({title,onClick}:HeaderActionButtontype){
    return <button style={{
        fontSize:"16px",
        fontWeight:"600",
        marginRight:"30px"
    }} onClick={onClick}>
        {title}
    </button>
}