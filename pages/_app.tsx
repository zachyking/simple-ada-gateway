import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

function PayADA({ Component, pageProps }: AppProps) {
    return(
        <html data-theme="night">
            <Component {...pageProps} />
        </html>
    )
}

export default PayADA;