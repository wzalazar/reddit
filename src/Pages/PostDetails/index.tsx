import React from 'react'

import { Template } from 'Pages/Template'
import { Space } from 'Components/Space'
import { FeaturePosts } from 'Features/PostReddit/FeaturePosts'
import { FeaturePostDetails } from 'Features/PostReddit/FeaturePostDetails'

export const PostDetails = () => (
  <Template
    sidebar={
      <Space m="50px 0 60px 0px" width="100%">
        <FeaturePosts />
      </Space>
    }
    main={
      <Space m="50px 0 60px 0px" width="100%">
        <FeaturePostDetails />
      </Space>
    }
  />
)
