import React from "react"
// import { graphql, Link } from "gatsby"
import { Container, Link } from "../components/UI-Kit"

const SingleTagTemplate = ({ _, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Container>
      <h1>Posts about {tagName}</h1>
      <ul>
        {posts.map(({ frontmatter: { path, title } }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default SingleTagTemplate
