import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuItem = styled(NavLink)`
  display: block;
  padding: 10px;
  cursor: pointer;
  font-weight: normal;
  background: #dddddd;
  &.active {
    font-weight: 800;
    background: #ffcc33;
  }
`
