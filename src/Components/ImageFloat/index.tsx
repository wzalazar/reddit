import Styled from 'styled-components'

type Props = {
  t?: number
}

export const ImageFloat = Styled.img<Props>`
  width: ${(props) => props.width}
  height: ${(props) => props.height}
  pointer-events: none;


  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-float infinite 3s ease-in-out;
  }

  @keyframes App-logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${(props) => props.t || '5'}px)
    }
    100% {
      transform: translateY(0px)
    }
  }
`
