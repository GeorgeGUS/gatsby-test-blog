import React from "react"
import { Container, Title, Link } from "../components/UI-Kit"

const SingleTagTemplate = ({ _, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Container>
      <Title>Posts about {tagName}</Title>
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
