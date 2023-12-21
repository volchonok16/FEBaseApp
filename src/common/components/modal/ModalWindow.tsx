import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

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

  const sendRequest = () => {
    console.log('Send request')
    closeModal()
  }

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
        <Form.Label id="contained-modal-title-vcenter" column sm="6">
          <b>Сменить {personalData}</b>
        </Form.Label>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Введите пароль
          </Form.Label>
          <Col sm="5">
            <InputGroup>
              <Form.Control type={passwordInputType} />
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
              <Form.Control type={dataInputType} />
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
              <Form.Control type={confirmDataInputType} />
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
          <Button variant="info" className={css.btn} onClick={sendRequest}>
            Применить
          </Button>
        </Col>
      </Modal.Body>
    </Modal>
  )
}
