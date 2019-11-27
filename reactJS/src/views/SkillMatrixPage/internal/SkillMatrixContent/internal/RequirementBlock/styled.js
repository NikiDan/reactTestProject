import styled from 'styled-components'
import { styleguide } from '../../../../../../constants'

const { colors } = styleguide

const RequirmentWrapp = styled.div`
  width: 100%;
  min-height: 20rem;
  position: relative;
`
RequirmentWrapp.List = styled.ul`
  padding-left: 0;
  margin: 0;
`
RequirmentWrapp.Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin: .5rem 0;
  margin-bottom: 1rem;
  padding: .5rem 0 .5rem 1.5rem;
  position: relative;
  border-bottom: .1rem solid ${colors.mainBgColor};
  &:before {
    display: block;
    content: "";
    width: .5rem;
    height: .5rem;
    border-radius: 100%;
    background-color: ${colors.blue};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
RequirmentWrapp.ItemName = styled.div`
margin-right: .5rem;
font-weight: 500;
font-size: 2rem;
width: 100%;
max-width: 3rem;
color: ${colors.white};
`
RequirmentWrapp.ItemDescr = styled.div`
  width: 100%;
  font-size: 1.8rem;
  color: ${colors.mainColor};
`

RequirmentWrapp.Settings = styled.div`
  width: 100%;
  max-width: 20rem;
  text-align: right;
`
RequirmentWrapp.Button = styled.button`
  margin-right: 1rem;
  background-color: transparent;
  border: .1rem solid ${colors.blue};
  color: ${colors.blue};
  cursor: pointer;
  text-transform: capitalize;
  &:last-of-type {
    margin-right: 0;
  }
`
export {
  RequirmentWrapp
}
