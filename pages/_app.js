import React from "react";
import '../styles/main.scss'


const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
            {/* <style jsx global>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
            `}</style> */}
        </>
    )
}

export default MyApp;
