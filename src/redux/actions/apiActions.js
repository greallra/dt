import axios from '../../http/axios'

export const setApiCallActive = (data) => ({
    type: 'SET_API_CALL_ACTIVE',
    data
})
export const setSuccess = (data) => ({
    type: 'SET_SUCCESS',
    data
})
export const setError = (e="") => ({
    type: 'SET_ERROR',
    data: e
})
export const reset = () => ({
    type: 'RESET'
})

export const sendContact = (contact) => {
  return async (dispatch, getState)=>{
    dispatch(setApiCallActive(true))
    dispatch(setError(undefined))
    try {
      let res = await axios.post('/api/add_contact', contact)
      if(res.status === 201) {
        dispatch(setSuccess(true))
        dispatch(setApiCallActive(false))
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setError("Sorry, there was an error sending your message, check your internet connection"))
      dispatch(setApiCallActive(false))
    }
  }
}
