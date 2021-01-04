import React from "react"
import Layout from "../components/layout"
import BlogContainer from "../components/blogContainer"
import styled from "styled-components"
import { graphql } from "gatsby"

const Blog = ({
    data: {
        allMarkdownRemark: { edges },
        },
    }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <BlogContainer data={edge.node} style={{ display: "inline-block" }}/>)
    
    return (
        <Layout>
            <BlogHeader>
              {'>>>'} Blog
            </BlogHeader>

            <HorizontalLine />

            <PostContainer>
              {Posts}
            </PostContainer>
        </Layout>    
    )
}
    
export default Blog
  
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          htmlAst
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

const PostContainer = styled.div`
`

const BlogHeader = styled.h1`
  font-family: "Consolas";
  text-align: center;
`

const HorizontalLine = styled.hr`
  display: block;
  padding: 0;
  height: 2px;
  background-color: #333;
  border: none;
`