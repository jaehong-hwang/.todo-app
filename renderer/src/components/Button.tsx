import styled from 'styled-components'

export default styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.fonts.content};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}cc;
  }
`
