import React, { FC } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Flex } from 'Components/Flex'
import { ImgCircle } from 'Components/ImgCircle'
import { Space } from 'Components/Space'
import { IconOk } from 'Components/Icons'
import { Opacity } from 'Components/Opacity'

type Props = {
  author: string
  date: string
  thumbAuthor: string
  statusRead: boolean
}

const HeaderColor = styled.div`
  background-color: #f8f9fa;
  height: 40px;
  width: 100%;
`

export const CardHeader: FC<Props> = ({ author, date, thumbAuthor, statusRead }): JSX.Element => (
  <HeaderColor>
    <Space p="5px 15px" width="100%">
      <Flex align="center" justify="space-between" width="100%">
        <Flex align="center" justify="center">
          {thumbAuthor && <ImgCircle width={'30px'} height={'30px'} src={thumbAuthor} alt="Thumb" />}{' '}
          <Space ml="5px" mr="5px">
            {author && <p>Posted by {author}</p>}
          </Space>{' '}
          <time>
            <p>{date && moment.unix(parseInt(date)).fromNow()}</p>
          </time>
        </Flex>
        <Flex align="center" justify="center">
          <Opacity opacity={statusRead ? 1 : 0.2}>
            <IconOk width="15px" />
          </Opacity>
        </Flex>
      </Flex>
    </Space>
  </HeaderColor>
)
