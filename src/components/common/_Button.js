import { PropaneSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
export default function _Button(props){
    return(
        <div>
 <Button  style={{ textTransform: "none", padding:props.padding,backgroundColor:"#377dff",fontSize:18,fontWeight: 300,marginTop:10, }}  variant="contained">{props.title}</Button>
        </div>
    )
}

