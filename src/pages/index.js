import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/indexLayout"
import Profile from "../components/profile"
import BlogContainer from "../components/blogContainer"


const IndexPage = ({ 
  data: {
    allMarkdownRemark :  { edges }, 
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <BlogContainer data={edge.node}/>)

  return (
    <>
      <Layout>
        
        <IntroHeader>
          
            <h1>
              <Profile/> 
            </h1>
            <div>
              <h2>Zach Robertson:</h2>
              I am a software developer who likes to build things, and contribute to the open source community. I do everything from AI with python to 3D modeling with Fusion360. Sometimes I write about my projects on my <Link to="/blog" style={{ textDecoration: "none" }}>blog</Link>.
              Follow me on twitter <Link to="https://twitter.com/ZachRTech" style={{ textDecoration: "none" }}>@ZachRTech</Link> or check out my work on <Link to="https://github.com/zachrobertson" style={{ textDecoration: "none" }}>GitHub</Link>
            </div>
        </IntroHeader>

        <HorizontalLine />  
        <h2 style={{
          textAlign: "center",
          margin: "50px",
          fontSize: "50px"
        }}>
          Recent Blog Posts:
        </h2>
          {Posts}     

        <ToDo>
          
            <h1>
              Upcoming projects:
            </h1>

            <HorizontalLine />
          
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
            id
            excerpt(format: HTML)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `

const IntroHeader = styled.h1`
  positon: absolute;
  text-align: center;
  padding: 20px;
  display: inline-block;

  h1 {
    display: inline-block;
  }
  
  div {
    font-family: "Lucida Console";
    font-size: 15px;
    width: 50%;
    text-align: center;
    line-height: 150%;
    display: inline-block;
    padding-left: 10%;

    a {

      &:hover:visited {
        color: red;
      }

      &:visited {
        color: black;
      }
    }
  }
`

const HorizontalLine = styled.hr`
  display: block;
  padding: 0;
  height: 2px;
  background-color: black;
  border: none;
`

const ToDo = styled.div`
  background: bisque;
  padding: 10%;
  padding-top: 10px;
  border-radius: 10px/10px;
  text-align: center;
  height: 250px;
  margin: 10% 10% 10% 10%;
`;