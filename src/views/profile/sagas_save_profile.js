import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'

// We'll use this function to redirect to different routes based on cases
//import { browserHistory } from 'react-router'

// Helper for api errors
import { handleApiErrors } from '../../lib/api-errors'
import { saveProfileReq, saveProfileSucc, saveProfileError } from './actions'
import { SAVE_PROFILE_REQUESTING, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_ERROR } from './constants'

const profileAPIUrl = `${process.env.REACT_APP_API_URL}/profile/`

// Save Profile
function saveProfile (user_id, first, last, bio, portfolio) {
    const updateUrl = profileAPIUrl + "update?user_id=" + user_id + "&first_name=" + first + "&last_name=" + last + "&bio=" + bio + "&portfolio=" + portfolio;
    
    console.log(updateUrl);

    return fetch(updateUrl)
      .then(handleApiErrors)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch((error) => { throw error })
  }
  
  function* saveProfileGetFlow (user_id, first, last, bio, portfolio) {
    let profile
    try {
      const profile = yield call(saveProfile, user_id, first, last, bio, portfolio)
  
      yield put(saveProfileSucc(profile))
  
      //browserHistory.push('/widgets')
    } catch (error) {
      // error? send it to redux
      yield put(saveProfileError())
    } finally {
      // No matter what, if our `forked` `task` was cancelled
      // we will then just redirect them to login
      if (yield cancelled()) {
        //browserHistory.push('/login')
      }
    }
  
    // return the token for health and wealth
    return profile;
  }
  
  export function* saveProfileWatcher () {
    while (true) {
  
      const { user_id, first_name, last_name, bio, portfolio } = yield take(SAVE_PROFILE_REQUESTING)
        
      const task = yield fork(saveProfileGetFlow, user_id, first_name, last_name, bio, portfolio)
  
      const action = yield take([SAVE_PROFILE_SUCCESS, SAVE_PROFILE_ERROR])
  
      if (action.type === SAVE_PROFILE_ERROR) yield cancel(task)
  
      //yield call(logout)
    }
  }  

export default saveProfileWatcher
