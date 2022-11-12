import { PropaneSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
export default function _Button(props){
    return(
        <div>
 <Button  style={{ textTransform: "none", padding: "8px 20px",backgroundColor:"#377dff",fontSize:18,fontWeight: 300,marginTop:20, }}  variant="contained">{props.title}</Button>
        </div>
    )
}