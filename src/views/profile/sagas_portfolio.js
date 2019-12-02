import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import axios from 'axios';

// We'll use this function to redirect to different routes based on cases
//import { browserHistory } from 'react-router'

// Helper for api errors
import { handleApiErrors } from '../../lib/api-errors'
import { saveProfileError } from './actions'
import { PORTFOLIO_UPLOAD_REQUESTING, PORTFOLIO_UPLOAD_SUCCESS, PORTFOLIO_UPLOAD_ERROR } from './constants'

const APIUrl = `${process.env.REACT_APP_API_URL}/profile/portfolioUpload`
const BasePortfolioPath = `${process.env.REACT_APP_API_URL}/../../assets/portfolio/`

// Save Profile
function uploadPortfolio (event) {
    const form = new FormData()
    form.append('file', event.target.files[0])

    return axios.post(APIUrl, form)
    .then(response => {return response.data.filename})
    .catch((error) => { throw error })

    // return fetch(APIUrl, {
    //   method: 'POST',
    //   body: form,
    // })
  }
  
  function* uploadPortfolioGetFlow (event) {
    let filename
    try {
        filename = yield call(uploadPortfolio, event)
        // console.log(filename);

        yield put({type: PORTFOLIO_UPLOAD_SUCCESS, filename: BasePortfolioPath + filename})
        console.log(BasePortfolioPath + filename);

    } catch (error) {
      yield put({type: PORTFOLIO_UPLOAD_ERROR})
    } finally {
      if (yield cancelled()) {
        //browserHistory.push('/login')
      }
    }
  
    // return the token for health and wealth
    return filename;
  }
  
  export function* uploadPortfolioWatcher () {
    while (true) {
  
      const {event} = yield take(PORTFOLIO_UPLOAD_REQUESTING)

      console.log(event.target.files[0]);
        
      const task = yield fork(uploadPortfolioGetFlow, event)

      yield take([PORTFOLIO_UPLOAD_SUCCESS, PORTFOLIO_UPLOAD_ERROR])

    }
  }  

export default uploadPortfolioWatcher
