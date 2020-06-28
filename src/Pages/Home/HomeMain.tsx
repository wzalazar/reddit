import React from 'react'

import { Layout } from 'Components/Layout'
import { Space } from 'Components/Space'
import { Card } from 'Components/Card'

const cardMocked = {
  author: 'WickEDel-ixir',
  title:
    'This is my grandma and her 3rd weather book. She has recorded the weather every day where she lives for 30 years and is filling out the last year of the 3rd book. Not sure if it counts, but it counts in my eyes',
  date: '6 hours ago',
  thumbAuthor: 'https://b.thumbs.redditmedia.com/r-usRhC4xEa6Xh7scPFjQ-66CwcIfX7ga9psa3Vipkk.png',
  thumbPost:
    'https://preview.redd.it/67p80yqetg751.jpg?width=640&height=752&crop=smart&auto=webp&s=c4b567cca203ae3f188196e95f7fe2540a97b9d0',
  commentNumber: 1634,
  statusRead: false,
  onDismiss: () => {},
}

export const HomeMain = () => (
  <Layout>
    <Space p="50px 0 60px 0px">
      <Card {...cardMocked} />
    </Space>
  </Layout>
)
