import React from 'react'
import { render } from '@testing-library/react'

import { Providers } from 'Application/Providers'
import { FeaturePostDetails } from './FeaturePostDetails'

jest.mock('./Hooks/usePostDetails', () => ({
  usePostDetails: () => ({
    post: {
      isDismiss: true,
    },
  }),
}))

describe('FeaturePostDetails', () => {
  describe('When the post is isDismiss', () => {
    it('should render Nothing to see here, Opps!', () => {
      const container = render(
        <Providers>
          <FeaturePostDetails />
        </Providers>
      )

      expect(container.queryByText('Nothing to see here, Opps!')).toBeInTheDocument()
    })
  })
})
