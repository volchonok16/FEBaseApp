import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

import { useForm, SubmitHandler } from 'react-hook-form'

import css from './ModalWindow.module.css'

import { DataType } from '../../../features/ownerProfile/OwnerProfile'
import { EyeIcon } from '../eyeIcon/EyeIcon'

type PropsType = {
  isModalOpen: boolean
  personalData: string
  dataType: DataType
  hideModal: () => void
}

export const ModalWindow: FC<PropsType> = ({
  isModalOpen,
  personalData,
  dataType,
  hideModal,
}) => {
  const [passwordInputType, setPasswordInputType] = useState<
    'password' | 'text'
  >('password')

  const [dataInputType, setDataInputType] = useState<DataType | 'text'>(
    dataType,
  )

  const [confirmDataInputType, setConfirmDataInputType] = useState<
    DataType | 'text'
  >(dataType)

  const closeModal = () => {
    hideModal()
  }

  const choosePasswordInputType = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')
  }

  const chooseDataInputType = () => {
    setDataInputType(dataInputType === 'password' ? 'text' : 'password')
  }

  const chooseConfirmDataInputType = () => {
    setConfirmDataInputType(
      confirmDataInputType === 'password' ? 'text' : 'password',
    )
  }

  const { register, handleSubmit } = useForm<FormInputType>()
  const onSubmit: SubmitHandler<FormInputType> = (data) => console.log(data)

  return (
    <Modal
      show={isModalOpen}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Col sm="12">
        <CloseButton className={css.closeBtn} onClick={closeModal} />
      </Col>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label id="contained-modal-title-vcenter" column sm="6">
            <b>Сменить {personalData}</b>
          </Form.Label>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="6">
              Введите пароль
            </Form.Label>
            <Col sm="5">
              <InputGroup>
                <Form.Control
                  type={passwordInputType}
                  {...register('password')}
                />
                <InputGroup.Text onClick={choosePasswordInputType}>
                  <EyeIcon inputType={passwordInputType} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="6">
              Введите новый {personalData}
            </Form.Label>
            <Col sm="5">
              <InputGroup>
                <Form.Control
                  type={dataInputType}
                  {...register(
                    dataType === 'password'
                      ? 'newPassword'
                      : dataType === 'tel'
                        ? 'newTel'
                        : 'newEmail',
                  )}
                />
                {(dataInputType === 'password' || dataInputType === 'text') && (
                  <InputGroup.Text onClick={chooseDataInputType}>
                    <EyeIcon inputType={dataInputType} />
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="6">
              Подтвердите новый {personalData}
            </Form.Label>
            <Col sm="5">
              <InputGroup>
                <Form.Control
                  type={confirmDataInputType}
                  {...register(
                    dataType === 'password'
                      ? 'confirmNewPassword'
                      : dataType === 'tel'
                        ? 'confirmNewTel'
                        : 'confirmNewEmail',
                  )}
                />
                {(confirmDataInputType === 'password' ||
                  confirmDataInputType === 'text') && (
                  <InputGroup.Text onClick={chooseConfirmDataInputType}>
                    <EyeIcon inputType={confirmDataInputType} />
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Col>
          </Form.Group>
          <Col sm="11">
            <Button className={css.btn} variant="info" type="submit">
              Применить
            </Button>
          </Col>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

type FormInputType = {
  password: 'password'
  newPassword?: 'password'
  confirmNewPassword?: 'password'
  newTel?: 'tel'
  confirmNewTel?: 'tel'
  newEmail?: 'email'
  confirmNewEmail?: 'email'
}
