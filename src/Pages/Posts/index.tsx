import React from 'react'

import { Template } from 'Pages/Template'

import { Space } from 'Components/Space'

import { FeaturePosts } from 'Features/PostReddit/FeaturePosts'
import { FeaturePostDismissAll } from 'Features/PostReddit/FeaturePostDismissAll'
import { Flex } from 'Components/Flex'
import { Opacity } from 'Components/Opacity'

const Sidebar = () => (
  <Space m="50px 0 60px 0px">
    <FeaturePosts />
  </Space>
)

const Main = () => (
  <Flex width="100%" justify="center" align="center">
    <Opacity opacity={0.2}>
      <h2>Nothing to see here, Opps!</h2>
    </Opacity>
  </Flex>
)

export const Posts = () => <Template sidebar={<Sidebar />} main={<Main />} footer={<FeaturePostDismissAll />} />
