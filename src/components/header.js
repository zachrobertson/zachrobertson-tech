import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useState } from "react"
import TransitionLink from "gatsby-plugin-transition-link"

function Header() {
    // Need to update when the url changes
    if (window.location.href === "http://localhost:8000/") {
        var headerShowDefault = true;
    }
    else {
        headerShowDefault = false;
    }
    console.log(window.location.href)
    const menuHoverDefault = false;

    const [showHeader, setShowHeader] = useState(headerShowDefault)
    const [menuHover, setMenuHover] = useState(menuHoverDefault)
    
    return (
        <>
            <StyledHeader style={{
                            backgroundColor: (showHeader ? "#1f2e2e" : "transparent"),
                            boxShadow : (showHeader ? "0 0 10px 10px #363945" : "none")
                        }}>
                <Hamburger onClick={() => setShowHeader(!showHeader)} style={{
                    zIndex: "5",
                    display: (showHeader ? "" : "none")
                }} onMouseOver={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <Bar3></Bar3>
                </Hamburger>
                <Hamburger onClick={() => setShowHeader(!showHeader)} style={{
                    display: (showHeader ? "none" : "")
                }} onMouseOver={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                    <Bar1></Bar1>
                    <Bar2 style={{
                        borderWidth: (menuHover ? "0 5px 5px 0" : ""),
                        transform: (menuHover ? "rotate(-45deg)" : ""),
                    }}></Bar2>
                    <Bar3></Bar3>
                </Hamburger>
                <ul style={{
                    display: (showHeader ? "" : "none")
                }}>
                    <li>
                        <TransitionLink to="/" style={{ textDecoration: "none" }}>
                            {'>>>'} Home
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink to="/blog" style={{ textDecoration: "none" }}>
                            {'>>>'} Blog
                        </TransitionLink>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            {'>>>'} Contact
                        </Link>
                    </li>
                </ul>
            </StyledHeader>
        </>
    )
}

export default Header


const StyledHeader = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    align-items: center;
    width: 12%;
    height: 100vh;
    scroll-behvior: smooth;
    z-index: 10;
    transition-duration: 0.4s;
    transition: background box-shadow ease-in-out;
    box-shadow: 5px black;

    ul {
        padding-top: 100px;

        li {
            list-style: none;
            padding: 50% 0 50% 0;
            
            a {
                font-family: "Consolas";
                font-size: x-large;
                color: #ffff;

                &:visited {
                    color: #ffff;
                }

                &:visited:hover {
                    color: purple;
                }
            }
        }
    }

`

const Hamburger = styled.button`
    outline: none;
    align-items: left;
    position: relative;
    right: 30%;
    top: 3%;
    border-radius: 10%;
    border: transparent;
    background: transparent;
    transition-duration: 0.4s;
`
const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: purple;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10%;

    ${Hamburger}:hover & {
        opacity: 0;
    }
`

const Bar2 = styled.div`
    width: 35px;
    height: 5px;
    background-color: purple;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10%;

    ${Hamburger}:hover & {
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: solid purple;
        border-width: 5px 0 0 5px;
        transform: rotate(-45deg)
    }
`

const Bar3 = styled.div`
    width: 35px;
    height: 5px;
    background-color: purple;
    margin: 6px 0;
    transition: 0.4s;
    opacity: 1;
    border-radius: 10%;

    ${Hamburger}:hover & {
        opacity: 0;
    }
`