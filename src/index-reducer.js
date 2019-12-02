import { combineReducers } from 'redux'
import signup from './redux/reducers/signup'
import login from './redux/reducers/login'
import client from './redux/reducers/client'
import idiom from './redux/reducers/idiom'
import profile from './views/profile/reducer'

const IndexReducer = combineReducers({
  signup,
  login,
  client,
  idiom,
  profile
})

export default IndexReducer
