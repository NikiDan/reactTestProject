import React from 'react'

import { RequirementBlock, MaterialBlock, ColumnBlock } from './internal'
import { SkillMatrixWrapp } from './styled'
import * as p from '../../../../permissions'
import { checkPermission } from '../../../../helpers'

const SkillMatrixContent = props => {
  const {
    user: { permissions },
    activeQualificationLevelId,
    activeQualificationId,
    departmentId,
    getSkillById,
    deleteSkillById,
    resetSkill,
    skillItem: {
      isFetching,
      skill
    }
  } = props

  const handleSkillClick = id => {
    getSkillById(id)
  }

  const handleSkillDelete = id => {
    return deleteSkillById(id, skill && skill.id === id)
  }

  return (
    <SkillMatrixWrapp>
      {checkPermission(permissions, [p.REQUIREMENTS_READ]) &&
      <SkillMatrixWrapp.Head>
        <RequirementBlock
          activeQualificationLevelId={activeQualificationLevelId}
          activeQualificationId={activeQualificationId}
        />
      </SkillMatrixWrapp.Head>
      }
      <SkillMatrixWrapp.Body>
        <ColumnBlock
          qualificationLevelId={activeQualificationId}
          departmentId={departmentId}
          handleSkillClick={handleSkillClick}
          activeSkill={skill}
          handleSkillDelete={handleSkillDelete}
          handleResetSkill={resetSkill}
        />
        {checkPermission(permissions, [p.MATERIALS_READ]) &&
          <MaterialBlock
            skill={skill}
            fetch={isFetching}
          />
        }
      </SkillMatrixWrapp.Body>
    </SkillMatrixWrapp>
  )
}

export default SkillMatrixContent
