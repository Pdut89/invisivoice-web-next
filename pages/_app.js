import { ThemeProvider } from 'styled-components'

import theme from 'config/theme'
import GlobalStyles from 'components/global-styles'
import AuthProvider from 'context/auth'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
