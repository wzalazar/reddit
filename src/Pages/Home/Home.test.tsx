import React from 'react'
import { render } from '@testing-library/react'
import { Providers } from 'Application/Providers'
import { Home } from './'

describe('Hompage', () => {
  it('should get the header title', () => {
    const { getByText } = render(
      <Providers>
        <Home />
      </Providers>
    )

    expect(getByText(/50 entries from Reddit/i)).toBeInTheDocument()
  })
})
