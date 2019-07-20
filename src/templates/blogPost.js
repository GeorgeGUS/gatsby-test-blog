import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-family: Avenir, Arial, sans-serif;
`
const NavLink = styled(Link)`
  padding: 0.5em 0;
  margin-right: 0.5em;
  color: #0070a1;
  :hover,
  :focus {
    color: #3db5e9;
    text-decoration: none;
    outline: none;
  }
  :active {
    opacity: 0.6;
  }
`
const Template = ({ data: { markdownRemark }, pageContext }) => {
  const { prev, next } = pageContext
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <Container>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />

      {prev && <NavLink to={prev.frontmatter.path}>{"<-"}Prev post</NavLink>}
      {next && <NavLink to={next.frontmatter.path}>Next Post{"->"}</NavLink>}
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
