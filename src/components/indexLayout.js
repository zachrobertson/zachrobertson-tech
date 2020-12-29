import React from "react"
import Header from "./indexHeader"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"



const Global = createGlobalStyle`
  html, body {
    background: #363945;
    margin: 0;
    position: relative;
    font-family: "Lucida Console";
    color: black;
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