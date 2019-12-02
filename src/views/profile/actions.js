import {
  READ_PROFILE_REQUESTING,
  READ_PROFILE_SUCCESS,
  READ_PROFILE_ERROR,
  SAVE_PROFILE_REQUESTING,
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_ERROR,
} from './constants'

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password

export function readProfileReq(user_id) {
  return {
    type: READ_PROFILE_REQUESTING,
    user_id: user_id
  }
}

export function readProfileSucc( profile ) {
  return {
    type: READ_PROFILE_SUCCESS,
    profile: profile
  }
}

export function readProfileError( ) {
  return {
    type: READ_PROFILE_ERROR
  }
}

export function saveProfileReq(user_id, first_name, last_name, bio, portfolio) {
  return {
    type: SAVE_PROFILE_REQUESTING,
    user_id: user_id,
    first_name: first_name,
    last_name: last_name,
    bio: bio,
    portfolio: portfolio
  }
}

export function saveProfileSucc( profile ) {
  return {
    type: SAVE_PROFILE_SUCCESS,
    payload: profile
  }
}

export function saveProfileError( ) {
  return {
    type: SAVE_PROFILE_ERROR
  }
}


