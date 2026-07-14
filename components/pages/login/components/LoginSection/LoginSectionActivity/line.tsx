export function Line() {
  return <div style={{
    width:"100%",
    display:"flex",
    marginTop:"20px",
    alignItems:"center",
    justifyContent:"space-between"
  }}>
    <div style={{
      width:"50%",
      height:"1px",
      backgroundColor:"lightgray"
    }}></div>
    <p style={{
        
      color:"lightgray",
      marginLeft:"10px",
      marginRight:"10px",
    }}>OR</p>
    <div style={{
      width:"50%",
      height:"1px",
      backgroundColor:"lightgray"
    }}></div>
  </div>
}
