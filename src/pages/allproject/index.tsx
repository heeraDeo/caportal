import type {NextPage} from 'next'
import Page from '../../components/page'
import AllProject  from "../../components/allprojects/allprojects"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <AllProject/>
            </Page>
        </div>
    )
}
export default PagesLink
