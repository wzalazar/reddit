import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { appLoadingSelector } from './appSelector'
import { useSelector } from 'react-redux'

// TODO Research another component, this implement
// has performance issue
export const FeatureLoadingApp = (): JSX.Element => {
  const loading = useSelector(appLoadingSelector)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let interval: any

    if (loading === 'loading') {
      interval = setInterval(
        () =>
          setPercentage((p) => {
            return p <= 90 ? p + 9 : p
          }),
        100
      )
    }

    if (loading === 'complete') {
      setPercentage(() => 100)
      clearInterval(interval)
      setPercentage(() => 0)
    }

    if (loading === 'idle') clearInterval(interval)
    return () => {
      clearInterval(interval)
    }
  }, [loading, percentage])

  return <LoadingBar progress={percentage} height={3} color="#FF4600" />
}
