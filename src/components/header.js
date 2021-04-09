import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import NavBarLinks from './navbarlinks';

require('typeface-roboto-mono')

const HeaderBody = styled.h1`
    width: 100%;
    margin: 0;
    background: #C4C4C4;


    height: 70px;
    left: 0px;
    top: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;

    a {
        text-decoration: none;
    }

`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const PythonTerminal = styled.span`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    padding-right: 10px;

    display: flex;
    flex-direction: row;

    color: #a0a0a0;
`

const HeaderTitle = styled.span`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    padding-right: 100px;

    display: flex;
    flex-direction: row;

    color: #000000;
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
    background-color: #111;
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #111;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
            props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
`


export default function Header() {

    const useWindowWidth = () => {
        const isBrowser = typeof window !== 'undefined'
        const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
      
        useEffect(() => {
          if (!isBrowser) return false
      
          const handleResize = () => setWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)
      
          return () => {
            window.removeEventListener('resize', handleResize)
          }
        })
      
        return width
    }

    const [navbarOpen, setNavbarOpen] = useState(false);
    
    const width = useWindowWidth();

    const mobile = width <= 760;

    return (
        <HeaderBody>
            <PythonTerminal>{'>>>'}</PythonTerminal>
            <Link to='/'>
                <HeaderTitle>zachrobertson.tech</HeaderTitle>
            </Link>
            <NavBarLinks />
            <Toggle
                navbarOpen={navbarOpen}
                onClick={ () => setNavbarOpen(!navbarOpen) }
            >
                { navbarOpen ? <Hamburger open />: <Hamburger />}
            </Toggle>
            
            { navbarOpen ? (
                <Navbox>
                    <NavBarLinks/>
                </Navbox>
            ): (
                <Navbox open>
                    <NavBarLinks />
                </Navbox>
            )}
        </HeaderBody>
    )
}