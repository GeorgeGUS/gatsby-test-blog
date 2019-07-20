import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import { CenteredContainer, Row, Link } from "../components/UI-Kit"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <CenteredContainer>
        {edges.map(edge => {
          const { title, path } = edge.node.frontmatter
          return (
            <Row key={path}>
              <Link to={path}>{title}</Link>
            </Row>
          )
        })}
        <Row>
          <Link to={"./tags"}>Browse by tags</Link>
        </Row>
      </CenteredContainer>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
