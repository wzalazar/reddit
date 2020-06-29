import React, { FC } from 'react'
import styled from 'styled-components'

import { Flex } from 'Components/Flex'
import { Button } from 'Components/Button'
import { Img } from 'Components/Img'
import { Space } from 'Components/Space'
import { IconComment } from 'Components/Icons'
import { CardHeader } from './CardHeader'

type Props = {
  title: string
  author: string
  date: string
  thumbAuthor: string
  thumbPost: string
  commentNumber: number
  statusRead: boolean
  onDismiss: () => void
}

const CardBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
`

const getImage = (img: string) => (['self', 'default'].includes(img) ? 'https://picsum.photos/100/100' : img)

export const Card: FC<Props> = ({
  title,
  author,
  date,
  thumbAuthor,
  thumbPost,
  commentNumber,
  statusRead,
  onDismiss,
}): JSX.Element => (
  <CardBox>
    <Flex wrap="wrap">
      <CardHeader author={author} date={date} thumbAuthor={getImage(thumbAuthor)} statusRead={statusRead} />
      <Space p="15px 15px" width="100%">
        <Flex width="100%">
          <Img src={getImage(thumbPost)} alt="Thumb" height="100px" width="100px" />
          <Space p="0 20px">
            <h6>{title}</h6>
          </Space>
        </Flex>
      </Space>
      <Space p="0 15px 10px 15px" width="100%">
        <Flex align="center" justify="space-between" width="100%">
          <Flex align="center" width="100%">
            <IconComment width="15px" />
            <Space ml="6px">
              <p>
                {commentNumber} <small>Comments</small>
              </p>
            </Space>
          </Flex>
          <Button onClick={onDismiss}>Dismiss</Button>
        </Flex>
      </Space>
    </Flex>
  </CardBox>
)
