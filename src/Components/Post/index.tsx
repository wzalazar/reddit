import React, { FC } from 'react'
import styled from 'styled-components'

import { Flex } from 'Components/Flex'
import { Space } from 'Components/Space'
import { Img } from 'Components/Img'

type Props = {
  title: string
  author: string
  date: string
  thumbAuthor: string
  thumbPost: string
  commentNumber: number
  statusRead: boolean
}

const CardBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
`

export const Post: FC<Props> = ({ title, thumbPost }): JSX.Element => (
  <CardBox>
    <Space p="30px" width="100%">
      <Flex wrap="wrap">
        <Space mt="20px" width="100%">
          <Flex width="100%" wrap="wrap" justify="center">
            <Space mt="20px" width="100%">
              <h2>{title}</h2>
            </Space>
            <Space mt="20px" width="100%">
              <Img src={thumbPost} alt="Thumb" />
            </Space>
          </Flex>
        </Space>
      </Flex>
    </Space>
  </CardBox>
)
