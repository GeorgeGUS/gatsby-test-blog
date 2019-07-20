import React from "react"
import { Container, Title, Link } from "../components/UI-Kit"

const AllTagsTemplate = ({ _, pageContext }) => {
  const { tags } = pageContext
  return (
    <Container>
      <Title>All tags</Title>
      <ul>
        {tags.map((tagName, i) => (
          <li key={i}>
            <Link to={`/tags/${tagName}`}>{tagName}</Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default AllTagsTemplate
