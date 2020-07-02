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
    view: true,
  }),
}))

describe('TemplateMain', () => {
  describe('When is mobile and view true', () => {
    it('should render the main and hide the sidebar', () => {
      const container = render(
        <Providers>
          <TemplateMain sidebar={<p>sidebar</p>} main={<p>main</p>} />
        </Providers>
      )

      expect(container.queryByText('sidebar')).not.toBeInTheDocument()
      expect(container.queryByText('main')).toBeInTheDocument()
    })
  })
})
