import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

//#region component props
interface IProps {
  children: ReactNode
}
//#endregion

const Layout = (props: IProps) => {
  const { children } = props
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout