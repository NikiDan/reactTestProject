import styled from 'styled-components'

const DepartmentContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

DepartmentContent.Item = styled.div`
  width: 100%;
  max-width: 20rem;
  margin-right: 2rem;
`

const CardsWrapp = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export {
  DepartmentContent,
  CardsWrapp
}
