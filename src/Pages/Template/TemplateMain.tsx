import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'
import { useWindowSize } from 'react-use-breakpoints'

import { Layout } from 'Components/Layout'
import { Flex } from 'Components/Flex'
import { useQuery } from 'Features/PostReddit/Hooks/useQuery'

type Props = {
  sidebar: ReactNode
  main: ReactNode
}

const Scroll = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
`

type DesktopProps = {
  hide?: boolean
}

const DesktopSidebar = styled(Flex)<DesktopProps>`
  width: 100%;
  position: absolute;
  top: 0px;

  ${({ hide }: any) =>
    hide &&
    css`
      display: none;
    `}

  @media only screen and (min-width: 768px) {
    width: 30%;
    min-width: 384px;
    position: static;
  }
`

const DesktopMain = styled(Flex)<DesktopProps>`
  width: 100%;
  position: absolute;
  top: 0px;
  padding-left: 10px;
  box-sizing: border-box;

  ${({ hide }: any) =>
    hide &&
    css`
      display: none;
    `}

  @media only screen and (min-width: 768px) {
    width: 70%;
    position: static;
    padding-left: 0px;
  }
`

const Desktop = styled(Flex)`
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    position: static;
  }
`

export const TemplateMain: FC<Props> = ({ sidebar, main }) => {
  const { outerWidth } = useWindowSize()
  const isMobile = outerWidth <= 768 ?? false
  const { view } = useQuery()

  const hidePost = !view && isMobile
  const hideSidebar = view && isMobile

  return (
    <Layout>
      <Desktop>
        <DesktopSidebar hide={hideSidebar}>
          <Scroll>{sidebar}</Scroll>
        </DesktopSidebar>
        <DesktopMain hide={hidePost}>{main}</DesktopMain>
      </Desktop>
    </Layout>
  )
}
