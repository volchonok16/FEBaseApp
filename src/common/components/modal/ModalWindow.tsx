import { FC } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import css from './ModalWindow.module.css'

import cross from '../../../assets/cross.svg'
import { DataType } from '../../../features/ownerProfile/OwnerProfile'

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
  const closeModal = () => {
    hideModal()
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
      <Image className={css.image} src={cross} onClick={closeModal} />
      <Modal.Body>
        <Form.Label id="contained-modal-title-vcenter" column sm="6">
          <b>Сменить {personalData}</b>
        </Form.Label>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Введите пароль
          </Form.Label>
          <Col sm="5">
            <Form.Control type="password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Введите новый {personalData}
          </Form.Label>
          <Col sm="5">
            <Form.Control type={dataType} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="6">
            Подтвердите новый {personalData}
          </Form.Label>
          <Col sm="5">
            <Form.Control type={dataType} />
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
