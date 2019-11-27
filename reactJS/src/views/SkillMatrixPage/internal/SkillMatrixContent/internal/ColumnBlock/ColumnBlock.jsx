import React, { useEffect, useState } from 'react'

import { Loading, Modal, InputGroup } from '../../../../../../components'
import { api } from '../../../../../../services'
import { CardItem } from './internal'
import { ColumnWrapper, ColumnContent, CardsWrapp } from './styled'

const defaultState = {
  skillsList: [],
  spinners: [],
  activeCategories: [],
  showModal: false,
  isCategoryModal: false,
  modalIndex: 0,
  modalName: '',
  modalItemId: null
}

const ColumnBlock = ({ departmentId, qualificationLevelId, handleSkillClick, activeSkill, handleSkillDelete, handleResetSkill }) => {
  const [state, setState] = useState({ ...defaultState })

  const { spinners, skillsList, activeCategories, showModal, isCategoryModal, modalIndex, modalName, modalItemId } = state

  useEffect(() => {
    setState({
      ...state,
      spinners: [true],
      skillsList: [{ skills: [], categories: [] }]
    })

    api.skills.getSkillsByDepartmentIdQualificationLevelId(departmentId, qualificationLevelId)
      .then(({ data }) => {
        setState({
          ...state,
          skillsList: [data],
          spinners: [false]
        })
      })
  }, [])

  const handleCategoryClick = (category, index) => {
    handleResetSkill()

    setState({
      ...state,
      activeCategories: [
        ...activeCategories.slice(0, index),
        category
      ],
      spinners: [
        ...spinners.slice(0, index + 1),
        ...[...Array(spinners.length - index)].map(() => true)
      ],
      skillsList: [
        ...skillsList.slice(0, index + 1),
        { skills: [], categories: [] }
      ]
    })

    return api.skills.getSkillsByDepartmentIdQualificationLevelId(departmentId, qualificationLevelId, { category_id: category.id })
      .then(({ data }) => {
        setState({
          ...state,
          activeCategories: [
            ...activeCategories.slice(0, index),
            category
          ],
          skillsList: [
            ...skillsList.slice(0, index + 1),
            data
          ],
          spinners: [
            ...spinners.slice(0, index + 1),
            false
          ]
        })
      })
  }

  const handleEdit = (item, index, isCategory) => {
    setState({
      ...state,
      showModal: true,
      isCategoryModal: isCategory,
      modalIndex: index,
      modalName: item.name,
      modalItemId: item.id
    })
  }

  const handleDelete = (item, index, isCategory) => {
    if (!isCategory) {
      setState({
        ...state,
        spinners: [
          ...spinners.slice(0, index),
          true,
          ...spinners.slice(index + 1)
        ]
      })

      return handleSkillDelete(item.id)
        .then(() => {
          setState({
            ...state,
            spinners: [
              ...spinners.slice(0, index),
              false,
              ...spinners.slice(index + 1)
            ],
            skillsList: [
              ...skillsList.slice(0, index),
              {
                ...skillsList[index],
                skills: skillsList[index].skills.filter(i => i.id !== item.id)
              },
              ...skillsList.slice(index + 1)
            ]
          })
        })
    }

    let spinnersList = []
    const isActive = activeCategories[index] && activeCategories[index].id === item.id

    if (isActive) {
      spinnersList = [
        ...spinners.slice(0, index),
        true,
        ...spinners.slice(index + 1).map(() => true)
      ]
    } else {
      spinnersList = [
        ...spinners.slice(0, index),
        true,
        ...spinners.slice(index + 1)
      ]
    }

    setState({
      ...state,
      spinners: spinnersList
    })

    return api.categories.removeCategoryById(item.id)
      .then(() => {
        let list = []
        if (isActive) {
          list = [
            ...skillsList.slice(0, index),
            {
              ...skillsList[index],
              categories: skillsList[index].categories.filter(i => i.id !== item.id)
            }
          ]
        } else {
          list = [
            ...skillsList.slice(0, index),
            {
              ...skillsList[index],
              categories: skillsList[index].categories.filter(i => i.id !== item.id)
            },
            ...skillsList.slice(index + 1)
          ]
        }
        setState({
          ...state,
          spinners: [
            ...spinners.slice(0, index),
            false,
            ...spinners.slice(index + 1)
          ],
          skillsList: list
        })
      })
  }

  const handleSwitch = (departmentId, qualificationId, itemId, type, isSwitched) => {
    const visibility = {
      department_id: departmentId,
      level_id: qualificationId,
      id: itemId,
      type: type,
      status: isSwitched ? 1 : 0
    }
    return api.skills.changeVisibility(visibility)
    // console.log('department:', departmentId)
    // console.log('level', qualificationId)
    // console.log('card:', itemId)
    // console.log('type', type)
    // console.log(isSwitched)
  }

  const openModal = (isCategory = false, index) => {
    setState({
      ...state,
      showModal: true,
      modalIndex: index,
      isCategoryModal: isCategory,
      modalName: '',
      modalItemId: null
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      showModal: false
    })
  }

  const handleInput = value => {
    setState({
      ...state,
      modalName: value
    })
  }

  const handleOk = () => {
    const categoryId = modalIndex ? activeCategories[modalIndex - 1].id : null

    const data = {
      name: modalName
    }

    setState({
      ...state,
      showModal: false,
      spinners: [
        ...spinners.slice(0, modalIndex),
        true,
        ...spinners.slice(modalIndex + 1)
      ]
    })

    if (isCategoryModal) {
      data.parent = categoryId

      return Promise.resolve()
        .then(() => {
          if (modalItemId !== null) {
            return api.categories.updateCategoryById(modalItemId, data)
          }
          return api.categories.createCategory(data)
        })
        .then(response => {
          const newState = {
            ...state,
            spinners: [
              ...spinners.slice(0, modalIndex),
              false,
              ...spinners.slice(modalIndex + 1)
            ],
            showModal: false
          }

          let categories = []

          if (modalItemId !== null) {
            const index = skillsList[modalIndex].categories.findIndex(i => i.id === modalItemId)

            categories = [
              ...skillsList[modalIndex].categories.slice(0, index),
              response.data,
              ...skillsList[modalIndex].categories.slice(index + 1)
            ]
          } else {
            categories = [
              ...skillsList[modalIndex].categories,
              response.data
            ]
          }

          newState.skillsList = [
            ...skillsList.slice(0, modalIndex),
            {
              ...skillsList[modalIndex],
              categories
            },
            ...skillsList.slice(modalIndex + 1)
          ]

          setState({ ...newState })
        })
    } else {
      data.category_id = categoryId

      return Promise.resolve()
        .then(() => {
          if (modalItemId !== null) {
            return api.skills.updateSkill(modalItemId, data)
          }
          data.department_id = departmentId
          data.qualification_level_id = qualificationLevelId

          return api.skills.createSkill(data)
        })
        .then(response => {
          const newState = {
            ...state,
            spinners: [
              ...spinners.slice(0, modalIndex),
              false,
              ...spinners.slice(modalIndex + 1)
            ],
            showModal: false
          }

          let skills = []

          if (modalItemId !== null) {
            const index = skillsList[modalIndex].skills.findIndex(i => i.id === modalItemId)

            skills = [
              ...skillsList[modalIndex].skills.slice(0, index),
              response.data,
              ...skillsList[modalIndex].skills.slice(index + 1)
            ]
          } else {
            skills = [
              ...skillsList[modalIndex].skills,
              response.data
            ]
          }

          newState.skillsList = [
            ...skillsList.slice(0, modalIndex),
            {
              ...skillsList[modalIndex],
              skills
            },
            ...skillsList.slice(modalIndex + 1)
          ]

          setState({ ...newState })
        })
    }
  }

  return (
    <ColumnWrapper>
      <ColumnContent>
        {skillsList.map((item, index) =>
          <ColumnContent.Item key={index}>
            {spinners[index] && <Loading />}
            <ColumnContent.ItemName >Categories</ColumnContent.ItemName>
            <CardsWrapp>
              {item.categories.map(category =>
                <CardItem
                  key={category.id}
                  item={category}
                  selected={!!activeCategories.find(i => i.id === category.id)}
                  onClick={() => handleCategoryClick(category, index)}
                  onEdit={() => handleEdit(category, index, true)}
                  onDelete={() => handleDelete(category, index, true)}
                  onSwitch={(bool) => handleSwitch(departmentId, qualificationLevelId, category.id, 'category', bool)}
                />
              )}
            </CardsWrapp>
            <ColumnContent.AddNew onClick={() => openModal(true, index)}>+ add new</ColumnContent.AddNew>
            <hr style={{ width: '100%' }} />
            <ColumnContent.ItemName>Skills</ColumnContent.ItemName>
            <CardsWrapp>
              {item.skills.map(skill =>
                <CardItem
                  key={skill.id}
                  item={skill}
                  onClick={() => handleSkillClick(skill.id)}
                  selected={activeSkill && activeSkill.id === skill.id}
                  onEdit={() => handleEdit(skill, index)}
                  onDelete={() => handleDelete(skill, index)}
                  onSwitch={(bool) => handleSwitch(departmentId, qualificationLevelId, skill.id, 'skill', bool)}
                />
              )}
            </CardsWrapp>
            <ColumnContent.AddNew onClick={() => openModal(false, index)}>+ add new</ColumnContent.AddNew>
          </ColumnContent.Item>
        )}
        <Modal
          title={`${modalItemId !== null ? 'Update' : 'Create new'} ${isCategoryModal ? 'category' : 'skill'} ${modalItemId !== null ? modalName : ''}`}
          closable={false}
          visible={showModal}
          onOk={handleOk}
          onCancel={closeModal}
        >
          <InputGroup
            kind='input'
            label={`${isCategoryModal ? 'Category' : 'Skill'} name`}
            type='text' placeholder={`${isCategoryModal ? 'Category' : 'Skill'} name`}
            onChange={e => handleInput(e.target.value)}
            value={modalName}
          />
          { !!modalIndex && activeCategories[modalIndex - 1] &&
          <InputGroup
            kind='input'
            type='text'
            addonBefore='Parent category'
            disabled
            value={activeCategories[modalIndex - 1].name}
          /> }
        </Modal>
      </ColumnContent>
    </ColumnWrapper>
  )
}

export default ColumnBlock
