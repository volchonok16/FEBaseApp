import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { modalFormSchema } from './modalFormValidation'
import css from './ModalWindow.module.css'

import { DataType } from '../../../features/ownerProfile/OwnerProfile'
import { EyeIcon } from '../eyeIcon/EyeIcon'

type PropsType = {
  isModalOpen: boolean
  personalData: string
  dataType: DataType
  hideModal: () => void
}

type FormInputType = z.infer<typeof modalFormSchema>

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(modalFormSchema),
  })

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    console.log(data)
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
            {errors.password && (
              <Col sm="11" className={css.err}>
                {errors.password?.message}
              </Col>
            )}
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="6">
              Введите новый {personalData}
            </Form.Label>
            <Col sm="5">
              <InputGroup>
                <Form.Control
                  type={dataInputType}
                  placeholder={dataType === 'tel' ? '+7-987-654-32-10' : ''}
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
            {(dataType === 'password'
              ? errors.newPassword
              : dataType === 'tel'
                ? errors.newTel
                : errors.newEmail) && (
              <Col sm="11" className={css.err}>
                {dataType === 'password'
                  ? errors.newPassword?.message
                  : dataType === 'tel'
                    ? errors.newTel?.message
                    : errors.newEmail?.message}
              </Col>
            )}
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="6">
              Подтвердите новый {personalData}
            </Form.Label>
            <Col sm="5">
              <InputGroup>
                <Form.Control
                  type={confirmDataInputType}
                  placeholder={dataType === 'tel' ? '+7-987-654-32-10' : ''}
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
            {(dataType === 'password'
              ? errors.confirmNewPassword
              : dataType === 'tel'
                ? errors.confirmNewTel
                : errors.confirmNewEmail) && (
              <Col sm="11" className={css.err}>
                {dataType === 'password'
                  ? errors.confirmNewPassword?.message
                  : dataType === 'tel'
                    ? errors.confirmNewTel?.message
                    : errors.confirmNewEmail?.message}
              </Col>
            )}
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
