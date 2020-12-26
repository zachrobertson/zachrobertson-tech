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

            <BodyContainer>
                {markdownRemark.rawMarkdownBody}
            </BodyContainer>
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
    rawMarkdownBody
  }
}
`

const BodyContainer = styled.div`
    align-items: center;
    align-content: center;
    text-align: center;
`

const PostWrapper = styled.div`
    align-items: center;
    text-align: center;
    font-family: "Lucida Console";
`

const TitleHeader = styled.h1`
    text-align: center;
    margin: 10 0 0 0;
`

const DateHeader = styled.div`
    padding-left: 10px;
    display: inline-block;
`

const HorizontalLine = styled.div`
    display: flex;
    width: 100%;
    height: 2px;
    background-color: black;
    margin: 25px;
`