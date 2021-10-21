import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  display: flex;
`
const Tab = styled(MagicLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-bottom: -1rem;
  padding: 0.25rem 0 1rem;
  color: ${(props) => props.theme.colors[props.current ? 'second' : 'main']};

  text-align: center;
  text-decoration: none;
  background-color: ${(props) =>
    props.theme.colors[props.current ? 'secondLight' : 'footerLight']};
  border-radius: 1rem 1rem 0 0;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors[props.current ? 'secondLight' : 'footer']};
  }
`
export default function ModeSelector() {
  const location = useLocation()
  return (
    <Wrapper>
      <Tab current={location.pathname === '/'} to='/'>
        Distance
      </Tab>
      <Tab current={location.pathname === '/itineraire'} to='/itineraire'>
        Itinéraire
      </Tab>
    </Wrapper>
  )
}
