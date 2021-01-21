
  const defaultState = {
    apiCallActive: false,
    success: undefined,
    error: undefined
  }
  export const apiReducer = (state = defaultState, { type, data }) => {
      switch (type) {
          case 'SET_API_CALL_ACTIVE':
              return {...state, apiCallActive: data}
          case 'SET_SUCCESS':
              return {...state, success: data}
          case 'SET_ERROR':
              return {...state, error: data}
          case 'RESET':
              return defaultState
          default:
              break;
      }
    return state;
  };

