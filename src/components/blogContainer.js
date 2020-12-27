import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogContainer = ({ data }) => {

    return (
        <Link to={data.frontmatter.slug} style={{
            textDecoration: "none"
        }}>
        <Container>
            <h1>{data.frontmatter.title}</h1>
            <HorizontalLine />
            <p>{data.html}</p>
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
    height: 250px;
    background-color: bisque;
    font-family: "Lucida Console";
    color: black;
    margin: 10% 10% 10% 10%;
    text-align: center;
    border-radius: 10px/10px;
`

const HorizontalLine = styled.hr`
    width: 90%;
`