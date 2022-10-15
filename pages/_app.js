import { ThemeProvider } from 'styled-components'

import theme from 'config/theme'
import GlobalStyles from 'components/global-styles'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
