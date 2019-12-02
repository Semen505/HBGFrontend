import { SIGNUP_REQUESTING } from '../../constants'

const signupRequest = function signupRequest ({ email, password }) {
  console.log('signupRequest');
  console.log("email:" + email);
  console.log("password:" + password);
  return {
    type: SIGNUP_REQUESTING,
    email,
    password,
  }
}

export default signupRequest
