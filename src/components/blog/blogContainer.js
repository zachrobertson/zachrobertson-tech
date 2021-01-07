import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const BlogContainer = ({ data }) => {
    
    return (
        <Link to={data.frontmatter.slug} style={{
            textDecoration: "none"
        }}>
        <Container>
            <span>{data.frontmatter.title}</span>
            <div>{"By : " + data.frontmatter.author + ", " + data.frontmatter.date}</div>
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
    font-family: "Tiempos Text";
    color: #ffff;
    margin: 10% 10% 10% 10%;
    border-radius: 10px/10px;
    padding-left: 20px;
    box-shadow: 5px 5px 5px 5px black;

    p {
        color: #ffff;
        margin: 20px;

        code {
            background: gray;
            border-radius: 10px/10px;
            padding: 5px;
        }
    }

    h1 {
        color: #ffff;
    }

    h2, h3 {
        text-align: center;
    }

    hr {
        border: none;
    }
    
    hr::before {
    content: '***';
    display: block;
    text-align: center;
    }

    span {
        font-size: 35px;
        margin: 10px;
        text-decoration: uppercase;
    }

    div {
        font-size: 20px;
        margin: 20px;
    }
`

const HorizontalLine = styled.hr`
    padding: 0;
    height: 2px;
    width: 90%;
    background-color: #ffff;
    border: none;
`