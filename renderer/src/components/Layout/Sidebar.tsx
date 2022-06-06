import styled from 'styled-components'

export default () => {
  return <SidebarWrapper>12341234</SidebarWrapper>
}

const SidebarWrapper = styled.section`
  padding-top: 37px;
  width: 240px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bright};
`
