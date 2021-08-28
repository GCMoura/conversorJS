import styled from 'styled-components'

const Header = styled.header`
  width: 100vw;
  height: 70px;
  background: linear-gradient(#777, #eee);
  font-size: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;

  @media(min-width: 800px) {
    height: 100px;
    font-size: 34px;
  }
`

export default Header