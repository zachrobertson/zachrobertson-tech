import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"




const Footer = () => {

    const images = useStaticQuery(graphql`
    query {
        githubImage: file(relativePath: { eq: "GitHubLogo.png" }) {
            childImageSharp {
                fixed(width: 32, height: 32) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        linkedinImage: file(relativePath: {eq: "LinkedinLogo.png"}){
            childImageSharp {
                fixed(width: 32, height: 32) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        }
`)


    return (
        <StyledFooter>
            <StyledLink to="https://github.com/zachrobertson">
                <Img fixed={images.githubImage.childImageSharp.fixed}/>
            </StyledLink>
            <StyledLink to="https://www.linkedin.com/in/zach-robertson-883509119/">
                <Img fixed={images.linkedinImage.childImageSharp.fixed}/>
            </StyledLink>
            <FooterText>
                This is an open source website | Created by Zach Robertson with <Link to="https://www.gatsbyjs.com/" style={{ textDecoration: "none" }}>Gatsby</Link>
            </FooterText>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    position: relative;
    text-align: center;
    align-items: center;
    background: #16181d;
    width: 100%;
    height: 7.5rem;
    border: none;
    z-index: 1;
    bottom: 0;
    padding-top: 20px;
`

const FooterText = styled.div`
    font-family: "Lucida Console";
    font-size: 1.25rem;
    color: black;
    padding-top: 50px;
    left: 50%;
    flex: 1 0 auto;
`

const StyledLink = styled(Link)`
    margin 20px;
`