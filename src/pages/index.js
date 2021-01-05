import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Profile from "../components/profile"
import BlogContainer from "../components/blog/blogContainer"


const IndexPage = ({ 
  data: {
    allMarkdownRemark :  { edges }, 
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <BlogContainer data={edge.node} key={edge.node.frontmatter.slug}/>)

  return (
    <>
      <Layout>
        <IntroHeader>
            <span>
              <Profile/> 
            </span>
            <div>
              <span>Zach Robertson:</span>
              <br />
                I am a software developer who likes to build things, and contribute to the open source community. I do everything from AI with python to 3D modeling with Fusion360. Sometimes I write about my projects on my <Link to="/blog" style={{ textDecoration: "none" }}>blog</Link>.
              Follow me on twitter <a href="https://twitter.com/ZachRTech" style={{ textDecoration: "none" }}>@ZachRTech</a> or check out my work on <a href="https://github.com/zachrobertson" style={{ textDecoration: "none" }}>GitHub</a>
              <HorizontalLine /> 
            </div>
        </IntroHeader>         
        <h2 style={{
          textAlign: "center",
          margin: "50px",
          fontSize: "35px"
        }}>
          Recent Blog Posts:
        </h2>
          {Posts}     

        <ToDo>
          
            <h1>
              Upcoming projects:
            </h1>

            <HorizontalLine />
            <ul style={{listStyleType : "circle", textAlign: "left"}}>
              <li key="ToDo1">
                Make website mobile friendly
              </li>
              <li key="ToDo2">
                LittleBrother v0.0 alpha release :
                <br />
                <span> This is my OpenSource dashcamera project built around the ESP32 microcontroller</span>
              </li>
              <li key="ToDo3">
                Blog post on how to incorporate MoneyButton into a JavaScript project
              </li>
            </ul>
          
        </ToDo>   
      
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250, format: HTML)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              author
            }
          }
        }
      }
    }
  `

const IntroHeader = styled.h1`
  position: relative;
  text-align: center;
  display: inline-block;
  vertical-align: center;

  span {
    display: inline-block;
  }
  
  div {
    font-family: "Consolas";
    font-size: 20px;
    width: 50%;
    text-align: center;
    line-height: 150%;
    display: inline-block;
    padding-left: 10%;
    vertical-align: bottom;

    span {
      font-size: 35px;
      margin: 20px;
    }

    a {

      &:hover:visited {
        color: red;
      }

      &:visited {
        color: purple;
      }
    }
  }
`

const HorizontalLine = styled.hr`
  display: block;
  margin: 20px;
  height: 2px;
  background-color: #333;
  border: none;
`

const ToDo = styled.div`
  background: transparent;
  padding: 10%;
  padding-top: 10px;
  border-radius: 10px/10px;
  WebKitBorderRadius: 10px/10px;
  text-align: center;
  height: 250px;
  margin: 10% 10% 10% 10%;

  ul {
    
    li {
      padding: 10px;
    }
  }
`;