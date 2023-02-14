import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Actor = ({ id, name, description, avatarUrl }) => (
  <StyledWrapper>
    <StyledImage
      src={`https://res.cloudinary.com/dcopn0ll4/image/fetch/w_50,h_50,c_thumb,g_auto/${avatarUrl}`}
      alt=""
    />
    <ContentWrapper>
      <NameLink to={`/actors/${id}`}>{name}</NameLink>
      <p>{description}</p>
    </ContentWrapper>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  background: #1f1f1f;
  margin: 20px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  gap: 1rem;
`
const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 9999px;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: lightgray;
`
const NameLink = styled(Link)`
  margin: 10px;
  color: white;
`
