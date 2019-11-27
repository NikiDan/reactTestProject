import React, { Fragment, useState } from 'react'
import { Collapse, Divider } from 'antd'

import { AntAccordeon, LevelDescr } from './styled'
import { SkillMatrixContent } from '../'
import { Heading } from '../../../../components'

const { Panel } = Collapse

const Accordion = ({ data }) => {
  const [activeQualification, setActiveQualification] = useState(null)

  const getActiveQualification = (key) => {
    if (key !== 'undefined') {
      setActiveQualification(Number(key))
    } else {
      return null
    }
  }

  const renderTreeNodes = data =>
    <AntAccordeon accordion>
      {
        data.map(item => {
          return <Panel key={item.id} header={item.name}>
            { !!item.children.length &&
            <Fragment>
              <Heading>Sub Departments</Heading>
              {renderTreeNodes(item.children)}
            </Fragment>
            }
            { !!item.qualification_level_types && item.qualification_level_types.qualifications.length &&
              <Fragment>
                <Heading>Levels</Heading>
                <AntAccordeon accordion onChange={getActiveQualification}>
                  {item.qualification_level_types.qualifications.map(level =>
                    <Panel key={level.id} header={level.name}>
                      <LevelDescr>
                        <Divider>
                          <Heading style={{ marginBottom: 0 }}>Level description</Heading>
                        </Divider>
                        <p>{level.description !== '' ? level.description : 'No data'}</p>
                      </LevelDescr>
                      <SkillMatrixContent
                        activeQualificationLevelId={level.id}
                        departmentId={item.id}
                        activeQualificationId={activeQualification} />
                    </Panel>
                  )}
                </AntAccordeon>
              </Fragment>
            }
          </Panel>
        })
      }
    </AntAccordeon>

  return (
    renderTreeNodes(data)
  )
}

export default Accordion
