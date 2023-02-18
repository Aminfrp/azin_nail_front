import { useState, useMemo, createContext } from "react"
import '@/styles/index.css'
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material'
import type { AppProps } from 'next/app'
import Layout from "@/components/layouts";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function App({ Component, pageProps }: AppProps) {
  //#region theme
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(
            mode === "light" ?
              {
                primary: {
                  main: "#EEEEEE"
                },
                secondary: {
                  main: "#00ADB5"
                },
                text: {
                  primary: "#393E46"
                },
              } : {
                primary: {
                  main: "#393E46"
                },
                secondary: {
                  main: "#00ADB5"
                },
                text: {
                  primary: "#EEEEEE"
                },
              }
          )
        }
      }),
    [mode],
  );
  //#endregion

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout>
          < Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
