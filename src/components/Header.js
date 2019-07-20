import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { CenteredContainer, Title, Desc } from "../components/UI-Kit"

const TitleAndDesc = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <CenteredContainer>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </CenteredContainer>
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
