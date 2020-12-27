import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby" 
import styled from "styled-components"

export default function Template({ data }) {
  
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
        <PostWrapper>
            <TitleHeader>
                {frontmatter.title}
            </TitleHeader>
            <DateHeader>
                {frontmatter.date}
            </DateHeader> : 
            <DateHeader>
                {frontmatter.author}
            </DateHeader>
            
            <HorizontalLine />

            <PostContainer 
             className="blog-post-content"
             dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
        </PostWrapper>
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

const PostWrapper = styled.div`
    align-items: center;
    text-align: center;
    font-family: "Lucida Console";
`

const TitleHeader = styled.h1`
    text-align: center;
    align-content: center;
`

const DateHeader = styled.div`
    padding-left: 10px;
    display: inline-block;
`

const HorizontalLine = styled.div`
    display: flex;
    height: 2px;
    background-color: black;
    margin: 25px;
`

const PostContainer = styled.div`
    background: bisque;
    padding: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px/10px;

    p {
        line-height: 1.5;
        font-size: 25px;
    }
`