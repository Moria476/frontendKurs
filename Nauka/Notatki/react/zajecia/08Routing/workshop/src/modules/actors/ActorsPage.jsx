import styled from 'styled-components'
import { actors } from '../../assets/actorsData'
import { Actor } from './Actor'

export const ActorsPage = () => (
  <StyledWrapper>
    <h1>Actors</h1>
    {actors.map(actor => (
      <Actor key={actor.id} {...actor} />
    ))}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  padding: 2rem 4rem;
`
