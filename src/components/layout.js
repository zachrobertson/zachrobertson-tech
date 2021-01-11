import React from "react"
import Header from "./header"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"
import { useMediaQuery } from "react-responsive"




const Global = createGlobalStyle`
  html, body {
    background: #363945;
    margin: 0;
    position: relative;
    color: #ffff;
    background-color: #0d0d0d;
    height: auto;
    line-height: 1.5;
    font-family: Tahoma;
  }
`

const Layout = ({ children }) => {
    
    const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224});
    
    return (
        <>
        <Global />
            <Header />
            <div style={{
                margin: "0 auto",
                maxWidth: (isTabletOrMobile ? 720 : 960)
            }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout