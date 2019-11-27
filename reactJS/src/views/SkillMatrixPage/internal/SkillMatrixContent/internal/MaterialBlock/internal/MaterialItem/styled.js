import styled from 'styled-components'

import { styleguide } from '../../../../../../../../constants'

const { colors } = styleguide

const Material = styled.li`
  width: 100%;
  position: relative;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  &:before {
    display: block;
    content: '';
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

Material.ContentLink = styled.a`
  font-size: 1.4rem;
  color: ${colors.mainColor};
  text-decoration: underline;
  &:hover {
    text-decoration: underline !important;
  }
`
Material.ContentText = styled.p`
  font-size: 1.4rem;
  color: ${colors.mainColor};
`
Material.Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1rem;
`

Material.Button = styled.button`
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
  Material
}
