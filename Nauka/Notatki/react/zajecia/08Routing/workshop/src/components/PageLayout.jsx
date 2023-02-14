import styled from 'styled-components'

export const PageLayout = ({ menuContent, children }) => (
  <Wrapper>
    <Sidebar>{menuContent}</Sidebar>
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.div`
  width: 200px;
  background: #f5f5f5;
  border-right: 1px solid #d3d3d3;
`

const ContentWrapper = styled.section`
  flex: 1;
`
