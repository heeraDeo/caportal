import { PropaneSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
export default function _Button(props){
    return(
        <div>
 <Button  style={{ textTransform: "none", padding:props.padding,backgroundColor:"#377dff",fontSize:props.fontSize,fontWeight:props.fontWeight,marginTop:10, }}  variant="contained">{props.title}</Button>
        </div>
    )
}

