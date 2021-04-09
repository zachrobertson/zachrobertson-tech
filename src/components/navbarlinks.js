import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navbar = styled.div`
    position: relative;
    right: 0px;
    display: block;
    float: right;
    a {    
        align-items: right;
    }
`

const HeaderItem = styled.span`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    
    text-decoration-line: underline;

    color: #000000;
`
export default function NavBarLinks() {
    return (
        <Navbar>
            <Link to='/blog'>
                <HeaderItem>blog</HeaderItem>
            </Link>
            <Link to='/projects'>
                <HeaderItem>projects</HeaderItem>
            </Link>
        </Navbar>
    )
}