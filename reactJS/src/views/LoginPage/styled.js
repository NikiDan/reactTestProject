import styled from 'styled-components'
import backgoundImage from './img/bg.png'

const Login = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${backgoundImage}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Login.Card = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 30rem;
  background-color: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
Login.CardTitle = styled.p`
  font-size: 2rem;
  color: #1e1e1e;
  text-transform: uppercase;
`
export {
  Login
}
