import styled from 'styled-components'

const Welcome = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Welcome.Card = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 50rem;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
Welcome.CardTitle = styled.p`
  font-size: 2rem;
  color: #1e1e1e;
  text-transform: uppercase;
  margin: 20px 0;
`

export {
  Welcome
}
