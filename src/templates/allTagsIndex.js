import React from "react"
// import { graphql, Link } from "gatsby"
import { Container, Link } from "../components/UI-Kit"

const AllTagsTemplate = ({ _, pageContext }) => {
  const { tags } = pageContext
  return (
    <Container>
      <h1>All tags</h1>
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
