import React, { FC } from 'react'
import { Img } from 'Components/Img'

import Back from './back.svg'

type Props = {
  height?: string
  width?: string
}

export const IconBack: FC<Props> = (props) => <Img {...props} src={Back} />
