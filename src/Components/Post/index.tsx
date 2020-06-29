import React, { FC } from 'react'
import styled from 'styled-components'

import { Flex } from 'Components/Flex'
import { Space } from 'Components/Space'
import { Img } from 'Components/Img'
import { CardHeader } from 'Components/Card/CardHeader'

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

const getImage = (img: string) => (['self', 'default'].includes(img) ? 'https://picsum.photos/100/100' : img)

export const Post: FC<Props> = ({ title, author, date, thumbAuthor, statusRead, thumbPost }): JSX.Element => (
  <CardBox>
    <Space mt="10px" width="100%">
      <CardHeader author={author} date={date} thumbAuthor={getImage(thumbAuthor)} statusRead={statusRead} />
    </Space>
    <Space p="10px 20px 20px 20px" width="100%">
      <Flex wrap="wrap">
        <Flex width="100%" wrap="wrap" justify="flex-start">
          <Space mb="20px" width="100%">
            <h2>{title}</h2>
          </Space>
          <Space mt="10px" width="100%">
            {thumbPost && <Img src={getImage(thumbPost)} alt="Thumb" />}
          </Space>
        </Flex>
      </Flex>
    </Space>
  </CardBox>
)
