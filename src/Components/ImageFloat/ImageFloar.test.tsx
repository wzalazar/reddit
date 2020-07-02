import React from 'react'
import { render } from '@testing-library/react'

import { ImageFloat } from './'

it('Should render ImageFloat', () => {
  const tree = render(<ImageFloat />)

  expect(tree).toMatchSnapshot()
})
