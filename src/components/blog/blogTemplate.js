import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby" 
import styled from "styled-components"
import Profile from "../profile"
import { Link } from "gatsby"

export default function Template({ data }) {
  
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
        <IntroHeader>
          <span>
            <Profile/> 
          </span>
          <div>
            
            <span>{frontmatter.title} </span>
            {frontmatter.date + " : " + frontmatter.author}
            <HorizontalLine />
          </div>
        </IntroHeader>
        <PostContainer 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}



export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      author
    }
    html
  }
}
`

const IntroHeader = styled.h1`
  positon: absolute;
  text-align: center;
  padding: 20px;
  display: inline-block;

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
    vertical-align: center;

    span {
        font-size: 35px;
        margin-bottom: 25px;
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

const HorizontalLine = styled.div`
    display: flex;
    height: 2px;
    background-color: #333;
    margin: 25px;
    width: 90%;
`

const PostContainer = styled.div`
    background: #ffff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    align-items: center;
    border-radius: 10px/10px;
    color: #333;

    p {
        line-height: 1.5;
        font-size: 25px;
        color: #333;
    }
`