import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
            fixed(width: 200, height: 200, jpegQuality: 100) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fixed) {
        return <div>Picture not found</div>
    }

    return (
            <Img fixed={data.placeholderImage.childImageSharp.fixed} style={{
                borderRadius: "50%",
                border: "5px solid #1f2e2e",
                webkitBorderRadius: "500px",
                mozBorderRadius: "500px",
                padding: 0
            }} />
    )
}

export default Profile