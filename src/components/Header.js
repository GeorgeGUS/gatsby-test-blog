import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Arial, sans-serif;
`
const Title = styled.h2`
  margin-bottom: 0;
`
const Desc = styled.p`
  margin-top: 0;
  color: #888;
`
const TitleAndDesc = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Container>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Container>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDesc data={data} />}
    />
  )
}

export default Header
