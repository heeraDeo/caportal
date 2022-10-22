import AboutUs from './aboutusinfo'
import FactsAbout from './factsabout'
import WhyChooseUs from './whychooseus'
import OurTeam from './ourteam'
// import ContactUs from './contactus'
import NewsAndUpdates from './newsandupdates'


export default function index() {
  return (
    <div>   
      <AboutUs/> 
      <FactsAbout/>
      <WhyChooseUs/>
      <OurTeam/>
     {/* <ContactUs/>  */}
     <NewsAndUpdates/>    
    </div>
  )
}
