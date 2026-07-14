export default function CustomContinueWithButton({children, title}:{children:React.ReactNode, title:string}) {
    return <div className="custom-continue-with-button" style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        border:"1px solid lightgray",
        padding:"15px",
        borderRadius:"50px",
        marginTop:"20px",
        cursor:"pointer",
        width:"100%",}}>
        {children}
        <p style={{ margin: "0 10px" ,
            color:"#718096",
            fontSize:"18px",
        }}>{title}</p>
        <div>
            
        </div>
    </div>
}