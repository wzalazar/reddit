/// <reference types="react-scripts" />

// index.d.ts
declare module 'react-top-loading-bar' {
  var main: any
  export = main
}

declare module 'react-use-breakpoints' {
  type Breakpoints = {
    Breakpoints: any
    BreakpointContext: any
    useBreakpoints: any
    useWindowSize: any
  }

  var breakpoint: Breakpoints = {
    Breakpoints: null,
    BreakpointContext: null,
    useBreakpoints: null,
    useWindowSize: null,
  }
  export = breakpoint
}

declare module 'casual' {
  var c: any

  export = main
}
