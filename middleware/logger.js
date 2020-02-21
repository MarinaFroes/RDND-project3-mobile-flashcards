const logger = store => next => action => {
  console.group(action.type)
  console.warn(action)
  const returnValue = next(action)
  console.warn(store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
