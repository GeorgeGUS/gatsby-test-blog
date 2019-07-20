import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Arial, sans-serif;
`
const Row = styled.div`
  margin-bottom: 1rem;
`

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <Container>
        {edges.map(edge => {
          const { title, path } = edge.node.frontmatter
          return (
            <Row key={path}>
              <Link to={path}>{title}</Link>
            </Row>
          )
        })}
      </Container>
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
