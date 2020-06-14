export const createAsyncAction = (actionType) => {
  return {
    SUCCESS: `${actionType}.SUCCESS`,
    FAILURE: `${actionType}.FAILURE`,
    REQUEST:`${actionType}.REQUEST`
  }
}
