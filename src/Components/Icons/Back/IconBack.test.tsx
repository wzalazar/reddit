import React from 'react'
import { render } from '@testing-library/react'

import { IconBack } from './'

it('Should render Icon Back', () => {
  const tree = render(<IconBack />)

  expect(tree).toMatchSnapshot()
})
