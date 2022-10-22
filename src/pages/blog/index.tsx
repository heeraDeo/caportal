import type {NextPage} from 'next'
import Page from '../../components/page'
import Blog  from "../../components/blog/blog"

const PagesLink:NextPage = () =>{
        return (
        <div>
            <Page>
                <Blog/>
            </Page>
        </div>
    )
}
export default PagesLink
