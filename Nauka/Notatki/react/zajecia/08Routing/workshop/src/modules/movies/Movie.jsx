import styled from 'styled-components'

export const Movie = ({ name, avatarUrl, description, actors }) => (
  <Wrapper>
    <StyledImage
      src={`https://res.cloudinary.com/dcopn0ll4/image/fetch/w_200,h_200,c_pad,b_auto:predominant_gradient:4/${avatarUrl}`}
    />
    <MovieContentWrapper>
      <Name>{name}</Name>
      <Content>{description}</Content>
      <Content>Actors:</Content>
      <ActorsWrapper>
        {actors.map(actor => (
          <Actor key={actor} name={actor} />
        ))}
      </ActorsWrapper>
    </MovieContentWrapper>
  </Wrapper>
)

const Actor = ({ name }) => <ActorContent>{name}</ActorContent>

const Wrapper = styled.div`
  background: #1f1f1f;
  margin: 20px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  gap: 1rem;
`

const MovieContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const ActorsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const ActorContent = styled.p`
  font-weight: 600;
  color: lightgray;
`

const Name = styled.h3`
  color: white;
`

const Content = styled.p`
  color: lightgray;
`

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 9999px;
`
