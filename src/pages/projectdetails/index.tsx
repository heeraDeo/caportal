import type {NextPage} from 'next'
import Page from '../../components/page'
import ProjectDetails  from "../../components/projectdetails/projectdetails"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <ProjectDetails/>
            </Page>
        </div>
    )
}
export default PagesLink
