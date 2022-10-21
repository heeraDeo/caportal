import OurLatestWorks from './ourlatestworks'
import IndustryLeading from './industryleading'
import WhoWeAre from './whoweare'
import Features from './features'
import Testimonials from './testimonials'
import ContactUs from './contactus'
import AllProjects from '../allprojects/allprojects'

export default function index() {
  return (
    <div>
     <OurLatestWorks/>
     <IndustryLeading/>
     <Features/>
     <WhoWeAre/>
     <Testimonials/>
     <ContactUs/>
     {/* <AllProjects/> */}
    </div>
  )
}
