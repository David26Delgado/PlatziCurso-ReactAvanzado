import styled from 'styled-components'

export const List = styled.ul`
  display:flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    position:fixed;
    top: -20px;
    right: 0;
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    transform: scale(.5);
    z-index: 1;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
