import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogContainer = ({ data }) => {
    console.log(data)
    return (
        <Link to={data.frontmatter.slug} style={{
            textDecoration: "none"
        }}>
        <Container>
            <h1>{data.frontmatter.title}</h1>
            <HorizontalLine />
            <p>{data.htmlAst.children[2].children[0].value}</p>
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
    text-align: center;
    border-radius: 10px/10px;

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