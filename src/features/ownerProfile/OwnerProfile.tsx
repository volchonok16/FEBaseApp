import { FC, useState } from 'react'

import css from './ownerProfile.module.scss'

import { ModalWindow } from '../../common/components/modal/ModalWindow'

import avatar from 'assets/avatar.svg'
import { ContactItem } from 'features/ownerProfile/components/ContactItem'

export type DataType = 'tel' | 'email' | 'password'

export const OwnerProfile: FC = () => {
  const user = {
    name: 'Пакостин Степан Степанович',
    company: 'Дет. сад “Злая выхухоль”',
    position: 'Вредитель',
    status: 'Online',
    tel: '+7-678-34-56',
    email: 'first@mail.com',
    password: '*******',
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedData, setEditedData] = useState('')
  const [dataType, setDataType] = useState<DataType>('password')

  const openModal = (personalData: string, dataType: DataType) => {
    console.log('Открыть модальное окно')
    setIsModalOpen(true)
    setEditedData(personalData)
    setDataType(dataType)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="d-flex flex-column flex-md-row h-100">
      <div className="d-flex flex-column align-items-stretch p-5 me-md-3 mb-3 mb-md-0 rounded-4 bg-white h-100 w-100">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column align-items-center">
            <img className={css.avatar} src={avatar} alt="avatar" />
            <span className="p-1">{user.status}</span>
          </div>
          <div className="d-flex flex-column ms-5">
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>Организация: {user.company}</p>
            <p>Должность: {user.position}</p>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap">
          <div className="d-flex flex-column align-items-start flex-grow-1 me-2">
            <div className="my-3 ps-3">Данные аккаунта</div>
            <ContactItem
              title={'Номер телефона'}
              data={user.tel}
              personalData="номер телефона"
              dataType="tel"
              showModal={openModal}
            />
            <ContactItem
              title={'Почта'}
              data={user.email}
              personalData="адрес почты"
              dataType="email"
              showModal={openModal}
            />
          </div>
          <div className="d-flex flex-column flex-grow-1 me-2">
            <div className="my-3 ps-3">Способы входа</div>
            <ContactItem
              title={'Пароль'}
              data={user.password}
              personalData="пароль"
              dataType="password"
              showModal={openModal}
            />
          </div>
        </div>

        {isModalOpen && (
          <ModalWindow
            isModalOpen={isModalOpen}
            hideModal={closeModal}
            personalData={editedData}
            dataType={dataType}
          />
        )}
      </div>

      <div className="d-flex flex-column align-items-stretch flex-md-shrink-1 h-100">
        <div className="p-3 mb-3 rounded-4 bg-white">Sale</div>
        <div className="flex-grow-1 p-3 rounded-4 bg-white">
          Company
          <div className={css.info}>Some info</div>
        </div>
      </div>
    </div>
  )
}
