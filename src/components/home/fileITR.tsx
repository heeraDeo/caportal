import images from "../../../public/images";
// import { Button } from "@mui/material";
import _Button from "../common/_Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Card from "../../components/common/card";
import _Box from "../common/box"
export default function FileITR(){
    return(
        <div className="sm:flex sm:justify-center">
          <Card
            imgwidth={200}
            imgheight={120}
            title={"Start For Free"}
            padding={"12px 25px"}
            bgcolor={"#377dff"}
            headertext={"File ITR yourself on web"}
            image={images.headerimg1}
            paragraphtext={"Get acknowledgment (ITR-V) in 10 minutes"}
          />
          <div className="my-14 sm:my-0">
            <Card
              imgwidth={200}
              imgheight={120}
              title={"Start Now"}
              padding={"12px 25px"}
              bgcolor={"#00c9a7"}
              icon={<WhatsAppIcon style={{ width: 20, marginRight: 5 }} />}
              image={images.headerimg2}
              headertext={"File ITR with Tax Expert"}
              paragraphtext={"Get Year-round Services of Our Tax Expert"}
            />
          </div>

          <Card
            image={images.headerimg3}
            imgwidth={200}
            imgheight={120}
            title={"Start Now"}
            padding={"12px 25px"}
            bgcolor={"#00c9a7"}
            icon={<WhatsAppIcon style={{ width: 20, marginRight: 5, }} />}
            headertext={"Get your Notice / Demand resolved"}
            paragraphtext={"Let our Experts handle your Income-tax issues"}
          />
        </div>
    )
}