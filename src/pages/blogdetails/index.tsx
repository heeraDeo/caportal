import type {NextPage} from 'next'
import Page from '../../components/page'
import BlogDetails  from "../../components/blogdetails/blogdetails"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <BlogDetails/>
            </Page>
        </div>
    )
}
export default PagesLink
