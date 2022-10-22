import Head from 'next/head'
import Footer from './footer/Footer'
import Header from './header/Header'

type Props = {
  title?: string
  children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
  <>
    <Header/>
        <main>{children}</main>    
    <Footer />

  </>
)

export default Page
