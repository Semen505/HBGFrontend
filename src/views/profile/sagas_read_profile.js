import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'

// We'll use this function to redirect to different routes based on cases
//import { browserHistory } from 'react-router'

// Helper for api errors
import { handleApiErrors } from '../../lib/api-errors'
import { readProfileReq, readProfileSucc, readProfileError } from './actions'
import { READ_PROFILE_REQUESTING, READ_PROFILE_SUCCESS, READ_PROFILE_ERROR } from './constants'

const profileAPIUrl = `${process.env.REACT_APP_API_URL}/profile/`

function readProfile (user_id) {
  const readUrl = profileAPIUrl + "read?user_id=" + user_id;

  return fetch(readUrl)
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      return json;
    })
    .catch((error) => { throw error })
}

function* readProfileGetFlow (user_id) {
  let profile
  try {
    const profile = yield call(readProfile, user_id)

    yield put(readProfileSucc(profile))

  } catch (error) {
    // error? send it to redux
    yield put(readProfileError())
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login
    if (yield cancelled()) {
      //browserHistory.push('/login')
      console.log("iam readProfileGetFlow --- cancelled");
    }
  }

  // return the token for health and wealth
  return profile;
}

function* profileWatcher () {
  while (true) {

    const { user_id } = yield take(READ_PROFILE_REQUESTING)

    const task = yield fork(readProfileGetFlow, user_id)

    const action = yield take([READ_PROFILE_SUCCESS, READ_PROFILE_ERROR])

    if (action.type === READ_PROFILE_ERROR) yield cancel(task)
  }
}

export default profileWatcher
