import React, { Fragment, useEffect } from 'react'

import { Heading, Preloader } from '../../components'

import { Accordion } from './internal'

const SkillMatrixPage = props => {
  const {
    departments: { list, isFetching },
    getDepartments,
    getRequirementsTypes
  } = props

  useEffect(() => {
    getDepartments()
    getRequirementsTypes()
  }, [])

  return (
    <Fragment>
      <Heading>Departments</Heading>
      {isFetching
        ? <Preloader />
        : <Fragment>
          <Accordion
            data={list}
          />
        </Fragment>
      }
    </Fragment>
  )
}

export default SkillMatrixPage
