import styled from 'styled-components'

const Button = styled.button`
  border-radius: 6px;
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 40px;
  font-size: 26px;
  background-color: #fff;
  cursor: pointer;

  &:hover{
    background-color: #111;
    color: #fff;
    transition: 0.8s;
  }

  @media(min-width: 800px) {
    width: 170px;
    height: 50px;
  }
`

export default Button