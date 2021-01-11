import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import MoneyButton from "@moneybutton/react-money-button"


function Header() {

    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
    const isTabletOrMobile = useMediaQuery({ maxDeviceWidth : 1224 });
    if (isDesktopOrLaptop) {
        var headerShowDefault = typeof window !== 'undefined' ? window.location.href === "http://localhost:8000/" : "";
    }
    else {
        var headerShowDefault = false;
    }
    const menuHoverDefault = false;
    const [showHeader, setShowHeader] = useState(headerShowDefault);
    const [menuHover, setMenuHover] = useState(menuHoverDefault);
    
    
    
    return (
        <>
        
        <script src="https://www.moneybutton.com/moneybutton.js"></script>
            <StyledHeader style={{
                            backgroundColor: (showHeader ? "#4d4d4d" : "transparent"),
                            boxShadow: (showHeader ? '0px 0px 10px 5px black' : "none"),
                            width: (isDesktopOrLaptop ? '20rem' : '100%')
                        }}>
                { isDesktopOrLaptop &&
                <>
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
                    <li key={'home'}>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li key={'blog'}>
                        <Link to="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li key={"contact"}>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li key={'donate'}>
                        <p>DONATE</p>
                        <div>
                            <MoneyButton 
                                to="zachrobertson@moneybutton.com"
                                editable={true}
                                currency="USD"
                                type="tip"
                            />
                        </div>
                    </li>
                </ul>
                </>
                }
                { isTabletOrMobile &&
                    <>
                    <Hamburger onClick={() => setShowHeader(!showHeader)} style={{
                        zIndex: "5",
                        marginLeft: 0,
                        left: 0,
                        top: 0,
                    }}>
                        <MobileBar></MobileBar>
                        <MobileBar></MobileBar>
                        <MobileBar></MobileBar>
                    </Hamburger>
                    <ul style={{
                            display: (showHeader ? "" : "none")
                    }}>
                        <li>
                            <Link to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <span>DONATE</span>
                        </li>
                    </ul>
                    </>
                }
                
                
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
    width: 20rem;
    height: 100vh;
    scroll-behavior: smooth;
    z-index: 10;
    transition-duration: 0.4s;
    transition: background box-shadow ease-in-out;

    ul {

        li {
            list-style: none;
            font-size: xxx-large;
            padding-top: 30%;
            position: relative;
            right: -25px;

            p {
                color: #ffff;
                text-decoration: none;
                text-align: left;
                position: relative;
                margin-top: 0px;
                left: -20px;
            }

            div {
                margin-top: 0;
                position: relative;
                top: -20px;
                left: -10px;
            }
            
            a {
                color: #ffff;
                text-decoration: none;
                text-align: center;
                position: relative;
                left: -20px;

                :visited {
                    color: #ffff;
                }

                :visited:hover {
                    color: purple;
                }
                
                :hover {
                    color: purple;
                }
            }
        }
    }

`

const Hamburger = styled.button`
    outline: none;
    position: absolute;
    left: 12%;
    top: 3%;
    border-radius: 10%;
    border: transparent;
    background: transparent;
    transition-duration: 0.4s;
`

const MobileBar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ffff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10%;
`
const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ffff;
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
    background-color: #ffff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10%;

    ${Hamburger}:hover & {
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: solid #ffff;
        border-width: 5px 0 0 5px;
        transform: rotate(-45deg)
    }
`

const Bar3 = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ffff;
    margin: 6px 0;
    transition: 0.4s;
    opacity: 1;
    border-radius: 10%;

    ${Hamburger}:hover & {
        opacity: 0;
    }
`