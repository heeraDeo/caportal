import type {NextPage} from 'next'
import Page from '../../components/page'
import ContactUs  from "../../components/contactus"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <ContactUs/>
            </Page>
        </div>
    )
}
export default PagesLink
