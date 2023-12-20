import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

import css from './ModalWindow.module.css'

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
