import React from "react"
import { graphql } from "gatsby"
import { Container, Link, Row } from "../components/UI-Kit"

const Template = ({ data: { markdownRemark }, pageContext }) => {
  const { prev, next } = pageContext
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <Container>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <Row>
        {prev && <Link to={prev.frontmatter.path}>{"<-"}Prev post</Link>}
        {next && <Link to={next.frontmatter.path}>Next Post{"->"}</Link>}
      </Row>
    </Container>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
