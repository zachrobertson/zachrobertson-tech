import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby" 
import styled from "styled-components"

export default function Template({ data }) {
  
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <PostWrapper>
          <TitleHeader>{frontmatter.title}</TitleHeader>
          <DateHeader>{frontmatter.date}</DateHeader>
          <HorizontalLine />
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </PostWrapper>
      </div>
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
    }
  }
}
`

const PostWrapper = styled.div`
  align-items: center;
  text-align: center;
`

const TitleHeader = styled.h1`
  text-align: center;
  display: inline-block;
  margin: 10 0 0 0;
`

const DateHeader = styled.div`
  display: inline-block;
  padding-left: 10px;
`

const HorizontalLine = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background-color: black;
`