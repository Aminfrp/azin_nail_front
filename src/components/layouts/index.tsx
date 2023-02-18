import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useTheme, Box, Container } from '@mui/material';

//#region component props
interface IProps {
  children: ReactNode
}
//#endregion

const Layout = (props: IProps) => {
  // #region props
  const { children } = props
  // #endregion

  //#region hooks
  const { palette } = useTheme()
  //#endregion
  return (
    <Box sx={{ backgroundColor: palette.primary.main, color: palette.text.primary }}>
      <Container className="h-full">
        <Header />
        <main className="h-4/5">
          {children}
        </main>
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout