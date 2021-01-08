import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MoneyButton from "@moneybutton/react-money-button"


function Header() {
    // Need to update when the url changes
    
    const headerShowDefault = true;
    const menuHoverDefault = false;

    const [showHeader, setShowHeader] = useState(headerShowDefault);
    const [menuHover, setMenuHover] = useState(menuHoverDefault);

    return (
        <>
        <script src="https://www.moneybutton.com/moneybutton.js"></script>
            <StyledHeader style={{
                            backgroundColor: (showHeader ? "#4d4d4d" : "transparent"),
                            boxShadow: (showHeader ? '0px 0px 10px 5px black' : "none")
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
                        <Link to="/" style={{ textDecoration: "none" , position: "relative", left: "-20px", textTransform: "uppercase"}}>
                            {'>>>'} Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" style={{ textDecoration: "none" , position: "relative", left: "-20px", textTransform: "uppercase"}}>
                            {'>>>'} Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: "none" , position: "relative", left: "-20px", textTransform: "uppercase"}}>
                            {'>>>'} Contact
                        </Link>
                    </li>
                    <span>
                    Donate Here!
                    </span>
                    <li style={{
                        alignItems: "center",
                        paddingTop: "10%",
                    }}>
                        <MoneyButton 
                            to="zachrobertson@moneybutton.com"
                            editable={true}
                            currency="USD"
                            type="tip"
                        />
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
    width: 25rem;
    height: 100vh;
    scroll-behavior: smooth;
    z-index: 10;
    transition-duration: 0.4s;
    transition: background box-shadow ease-in-out;

    ul {
        padding-top: 20%;

        li {
            list-style: none;
            padding: 0 0 20% 10%;
            
            a {
                font-family: "Tiempos Text";
                font-size: x-large;
                color: #ffff;

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

        span {
            text-align: center;
            text-transform: uppercase;
            line-height: 2;
            font-size: x-large;
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