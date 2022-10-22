import type {NextPage} from 'next'
import Page from '../../components/page'
import AboutUS  from "../../components/aboutus"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <AboutUS/>
            </Page>
        </div>
    )
}
export default PagesLink
