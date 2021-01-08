import React from "react"
import Header from "./header"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"


const Global = createGlobalStyle`
  html, body {
    background: #363945;
    margin: 0;
    position: relative;
    font-family: "Tiempos Text";
    font-size: 100%;
    color: #ffff;
    background-color: #0d0d0d;
    height: auto;
    line-height: 1.5;
  }
`

const Layout = ({ children }) => {
    return (
        <>
        <Global />
            <Header />
            <div style={{
                margin: "0 auto",
                maxWidth: 960,
                minHeight: "100vh"
            }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout