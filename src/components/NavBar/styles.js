import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

// Animations
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin: 0 auto;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  max-width: 500px;
  height: 50px;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #888;
  
  &[aria-current] {
    color: #000;
    
    &::after {
      ${fadeIn({ time: '0.5s' })};
      content: '•';
      position: absolute;
      bottom: 0;
      font-size: 20px;
      line-height: 20px;
    }
  }
`
