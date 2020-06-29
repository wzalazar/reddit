import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconBack } from 'Components/Icons'

import { useQuery } from './Hooks/useQuery'

const IconBackPosition = styled(IconBack)`
  position: absolute;
  left: 10px;
  top: 15px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const FeaturePostGoBack = () => {
  const query = useQuery()

  if (!query.view) return null

  return (
    <Link
      to={{
        pathname: '/posts',
        search: `?page=${query.page}&id=${query.id}&view=false`,
      }}
    >
      <IconBackPosition height="20px" />
    </Link>
  )
}
