import React from 'react'
import { render } from '@testing-library/react'
import { Providers } from 'Application/Providers'
import { Template } from './'

describe.skip('Hompage', () => {
  it('should get the header title', () => {
    const { getByText } = render(
      <Providers>
        <Template main={null} sidebar={null} footer={null} />
      </Providers>
    )

    expect(getByText(/50 entries from Reddit/i)).toBeInTheDocument()
  })
})
