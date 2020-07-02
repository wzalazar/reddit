export const LocalStorage = () => {
  const loadState = () => {
    try {
      const serializedData = localStorage.getItem('state')

      if (serializedData === null) {
        return undefined
      }
      return JSON.parse(serializedData)
    } catch (error) {
      // TODO handle error
    }
  }

  const saveState = (state: any) => {
    /* eslint-disable no-undef */
    setImmediate(() => {
      try {
        let serializedData = JSON.stringify(state)
        localStorage.setItem('state', serializedData)
      } catch (error) {
        // TODO handle error
      }
    }, 0)
  }

  return {
    loadState,
    saveState,
  }
}
