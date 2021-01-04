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
    background-color: #336699;
    font-family: "Consolas";
    color: #333;
    margin: 10% 10% 10% 10%;
    text-align: center;
    border-radius: 10px/10px;

    p {
        height: auto;
        color: #333;
    }

    h1 {
        color: #333;
    }
`

const HorizontalLine = styled.hr`
    padding: 0;
    height: 2px;
    width: 90%;
    background-color: #333;
    border: none;
`