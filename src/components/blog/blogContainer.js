import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const BlogContainer = ({ data }) => {
    
    return (
        <Link to={data.frontmatter.slug} style={{
            textDecoration: "none"
        }}>
        <Container>
            <p>{data.frontmatter.title}</p>
            <p>{"By : " + data.frontmatter.author + ", " + data.frontmatter.date}</p>

            <HorizontalLine />
            <p dangerouslySetInnerHTML={{__html: data.excerpt}}/>
        </Container>
        </Link>
    )
}

export default BlogContainer

const Container = styled.div`
    position: relative;
    left: -96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #1f2e2e;
    font-family: "Consolas";
    color: #ffff;
    margin: 10% 10% 10% 10%;
    border-radius: 10px/10px;
    padding-left: 20px;
    box-shadow: 5px 5px 5px 5px black;

    p {
        height: auto;
        color: #ffff;
    }

    h1 {
        color: #ffff;
    }
`

const HorizontalLine = styled.hr`
    padding: 0;
    height: 2px;
    width: 90%;
    background-color: #ffff;
    border: none;
`