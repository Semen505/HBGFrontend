import { CLIENT_SET, CLIENT_UNSET } from '../../constants'

const initialSate = {
  id: null,
  email:null,
  token: null,
}

const reducer = function clientReducer (state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      // console.log("-----------------------", action.tokendata.data.user.id);
      return {
        id: action.tokendata.data.user.id,
        email: action.tokendata.data.user.email,
        token: action.tokendata.data.token,
      }

    case CLIENT_UNSET:
      return {
        id:null,
        email:null,
        token: null,
      }

    default:
      return state
  }
}

export default reducer
