import axios from 'axios';


export const ApiCall = ({
  method = 'get',
  url = 'https://shopserver.firebaseapp.com',
  endpoint = '',
  body = {},
  headers
}) => {
  return new Promise((resolve, reject) => {
    axios({url: `${url}${endpoint}`, method, data: body, headers})
    .then(response => {
      return resolve(response)})
    .catch(err => {
      return reject(err)})
})
}

export default store => next => action => {
  if (action.type !== 'API_CALL') return next(action)

  const {url, endpoint, method, body, headers, types} = action.fields

  next({type: types.REQUEST})

  const onSuccess = ({data}) => {
    const successAction = {
      data,
      type: types.SUCCESS
    }
    next(successAction)
  }

  const onFailure = ({message}) => {
    const failureAction = {
      error: message,
      type: types.FAILURE,
    }
    next(failureAction)
  }
  ApiCall({url, endpoint, method, body, headers}).then(onSuccess, onFailure)
}
