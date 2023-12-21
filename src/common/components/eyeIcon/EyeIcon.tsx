import { FC } from 'react'

import Image from 'react-bootstrap/Image'

import eyeOff from '../../../assets/eye-off.svg'
import eyeOpen from '../../../assets/eye-open.svg'

type PropsType = {
  inputType: 'password' | 'text'
}

export const EyeIcon: FC<PropsType> = ({ inputType }) => {
  return <Image src={inputType === 'password' ? eyeOpen : eyeOff} />
}
