import React, { FC } from 'react'
import { Img } from 'Components/Img'

import Comment from './comment.svg'

type Props = {
  height?: string
  width?: string
}

export const IconComment: FC<Props> = (props) => <Img {...props} src={Comment} />
