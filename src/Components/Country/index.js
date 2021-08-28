import styled from 'styled-components'

const Country = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 800px) {
    flex-direction: row;
    height: 60vh;
  }
`

export default Country