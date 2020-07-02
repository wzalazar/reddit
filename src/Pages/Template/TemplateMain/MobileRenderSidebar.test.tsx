import React from 'react'
import { render } from '@testing-library/react'

import { Providers } from 'Application/Providers'
import { TemplateMain } from './'

jest.mock('react-use-breakpoints', () => ({
  useWindowSize: () => ({
    outerWidth: 767,
  }),
}))

jest.mock('Features/PostReddit/Hooks/useQuery', () => ({
  useQuery: () => ({
    view: false,
  }),
}))

describe('TemplateMain', () => {
  describe('When is mobile and view false', () => {
    it('should render the sidebar and hide the main', () => {
      const container = render(
        <Providers>
          <TemplateMain sidebar={<p>sidebar</p>} main={<p>main</p>} />
        </Providers>
      )

      expect(container.queryByText('main')).not.toBeInTheDocument()
      expect(container.queryByText('sidebar')).toBeInTheDocument()
    })
  })
})
