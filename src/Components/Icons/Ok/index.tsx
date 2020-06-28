import React, { FC } from 'react'
import { Img } from 'Components/Img'

import ok from './ok.svg'

type Props = {
  height?: string
  width?: string
}

export const IconOk: FC<Props> = (props) => <Img {...props} src={ok} />
