import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Profile } from './styled'
import history from '../../../../history'
import { api } from '../../../../services'

const ProfileSetting = ({ userData }) => {
  const node = useRef()
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const signOut = () => {
    window.localStorage.clear('authToken')
    history.push('/login')
    api.auth.logout()
  }

  return (
    <Profile ref={node}>
      <Profile.Visiblie onClick={() => { setOpen(!isOpen) }}>
        { userData &&
          <Fragment>
            <Profile.Photo size='large' src={userData.picture} />
            <Profile.AboutBox>
              <Profile.Name>{userData.name}</Profile.Name>
            </Profile.AboutBox>
          </Fragment>
        }
      </Profile.Visiblie>
      { isOpen &&
        <Profile.SettingsBox>
          <Profile.SettingsItem onClick={signOut}>Logout</Profile.SettingsItem>
        </Profile.SettingsBox>
      }
    </Profile>
  )
}
export default ProfileSetting
