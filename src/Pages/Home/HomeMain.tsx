import React from 'react'

import { Layout } from 'Components/Layout'
import { Space } from 'Components/Space'

import { Post } from 'Features/PostReddit'

export const HomeMain = () => (
  <Layout>
    <Space p="50px 0 60px 0px">
      <Post />
    </Space>
  </Layout>
)
