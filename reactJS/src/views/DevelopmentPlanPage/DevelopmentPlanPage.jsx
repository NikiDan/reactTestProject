import React, { Fragment } from 'react'

import { createDepartmentRoad } from '../../helpers'
import { Avatar, Progress } from 'antd'
import { Heading } from '../../components'
import { FlexRow, UserInfo, UserLevel } from './styled'

const DevelopmentPlanPage = props => {
  const { user: { data, stat }, user } = props
  console.log(data, stat)
  return (
    <Fragment>
      <Heading>General Info</Heading>
      {user &&
        <FlexRow>
          <FlexRow.Item>
            <FlexRow.UserInfo>
              <Avatar size={150} src={user.data.picture} />
              <UserInfo>
                <p><span style={{ marginRight: 10 }}>Name:</span>{data.name}</p>
                <p><span style={{ marginRight: 10 }}>Email:</span>{data.email}</p>
                <p><span style={{ marginRight: 10 }}>Role:</span>{user.roles.length && user.roles[0].name}</p>
                <p><span style={{ marginRight: 10 }}>Department:</span>{createDepartmentRoad(user.data.department, 'name').reverse().join(' / ')}</p>
              </UserInfo>
            </FlexRow.UserInfo>
            <UserLevel>
              {data.experience && <UserLevel.Wrapp>
                <UserLevel.Item>Current level: {(data.experience.current_level !== null) ? data.experience.current_level : 'trainee'}</UserLevel.Item>
                <UserLevel.Item>Next level: {data.experience.target_level.name}</UserLevel.Item>
              </UserLevel.Wrapp>
              }
              <Progress
                type='circle'
                width={80}
                percent={stat.percent}
              />
            </UserLevel>
          </FlexRow.Item>
        </FlexRow>
      }
      <Heading style={{ marginTop: 50 }} >Development Plan</Heading>
    </Fragment>
  )
}

export default DevelopmentPlanPage
