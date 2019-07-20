import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Arial, sans-serif;
`
export const Container = styled.div`
  font-family: Avenir, Arial, sans-serif;
`
export const Row = styled.div`
  margin-bottom: 1rem;
`
export const Title = styled.h1`
  margin-bottom: 0;
`
export const Desc = styled.p`
  margin-top: 0;
  color: #888;
`
export const Link = styled(GatsbyLink)`
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
