import React, { FC } from 'react'
import styled from 'styled-components'

import { Flex } from 'Components/Flex'
import { Button } from 'Components/Button'
import { Img } from 'Components/Img'
import { ImgCircle } from 'Components/ImgCircle'
import { Space } from 'Components/Space'
import { IconComment } from 'Components/Icons'
import { IconOk } from 'Components/Icons'
import { Opacity } from 'Components/Opacity'

// - Title (at its full length, so take this into account when sizing your cells)
// - Author
// - entry date, following a format like “x hours ago”
// - A thumbnail for those who have a picture.
// - Number of comments
// - Unread status

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
    <Space p="30px">
      <Flex wrap="wrap">
        <Flex align="center" justify="space-between" width="100%">
          <Flex align="center" justify="center">
            {statusRead} <ImgCircle width={'30px'} src={thumbAuthor} alt="Thumb" />{' '}
            <Space ml="5px" mr="5px">
              <p>Posted by {author}</p>
            </Space>{' '}
            <time>
              <p>{date}</p>
            </time>
          </Flex>
          <Flex align="center" justify="center">
            <Opacity opacity={0.2}>
              <IconOk width="15px" />
            </Opacity>
          </Flex>
        </Flex>
        <Space mt="20px" width="100%">
          <Flex width="100%">
            <Img src={thumbPost} alt="Thumb" height="100px" width="100px" />
            <Space p="0 20px">
              <h6>{title}</h6>
            </Space>
          </Flex>
        </Space>
        <Space mt="20px" width="100%">
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
    </Space>
  </CardBox>
)
