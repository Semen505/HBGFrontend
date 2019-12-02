import {
  READ_PROFILE_REQUESTING,
  READ_PROFILE_SUCCESS,
  READ_PROFILE_ERROR,
  SAVE_PROFILE_REQUESTING,
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_ERROR,
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  BIO_CHANGE,
  PORTFOLIO_UPLOAD_REQUESTING,
  PORTFOLIO_UPLOAD_SUCCESS,
  PORTFOLIO_UPLOAD_ERROR,
  MODAL_CONFIRM
} from './constants'

const initialState = {
  requesting: false,
  successful: false,
  error: false,
  messages: "",
  first_name: "",
  last_name: "",
  bio: "",
  portfolio: 'http://pngimg.com/uploads/lion/lion_PNG23296.png',
  user_id: 'user1'
}

const reducer = function profileReducer (state = initialState, action) {
  switch (action.type) {
    case READ_PROFILE_REQUESTING:
      return Object.assign({}, state, {
        requesting: true,
        successful: false,
        error: false,
        messages: "Profile Reading...",        
      });

    case READ_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: false,
        messages: "",
        first_name: action.profile.data.first_name,
        last_name: action.profile.data.last_name,
        bio: action.profile.data.bio,
        portfolio: action.profile.data.portfolio
      })

    case READ_PROFILE_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: true,
        messages: "Read Profile failed.",
      })

    case SAVE_PROFILE_REQUESTING:
      return Object.assign({}, state, {
        requesting: true,
        successful: false,
        error: false,
        messages: "Profile saving...",
      });
  
    case SAVE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        successful: true,
        error: false,
        messages: "Profile saved successully.",
      })

    case SAVE_PROFILE_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: true,
        messages: "Save Profile failed.",
      })

    case PORTFOLIO_UPLOAD_REQUESTING:
      return Object.assign({}, state, {
        requesting: true,
        successful: false,
        error: false,
        messages: "Portfolio uploading...",
      });

    case PORTFOLIO_UPLOAD_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        successful: true,
        error: false,
        messages: "Portfolio uploaded successfully.",
        portfolio: action.filename
      })

    case PORTFOLIO_UPLOAD_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: true,
        messages: "Portfolio upload failed."
      })

    case FIRST_NAME_CHANGE:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: false,
        messages: "",
        first_name: action.payload
      })

    case LAST_NAME_CHANGE:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: false,
        messages: "",
        last_name: action.payload
      })

    case BIO_CHANGE:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: false,
        messages: "",
        bio: action.payload
      })

    case MODAL_CONFIRM:
      return Object.assign({}, state, {
        requesting: false,
        successful: false,
        error: false,
        messages: "",
      })

    default:
      {
        return state
      }
  }
}

export default reducer
