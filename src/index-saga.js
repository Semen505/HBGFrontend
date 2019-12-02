// @updated by Bluepine
// @updated at 2019.11.22

import SignupSaga from './sagas/signup'
import LoginSaga from './sagas/login'
import IdiomSaga from './sagas/idiom'
import ProfileSagaReadProfile from './views/profile/sagas_read_profile'
import ProfileSagaSaveProfile from './views/profile/sagas_save_profile'
import ProfileSagaPortfolio from './views/profile/sagas_portfolio'
export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    IdiomSaga(),
    ProfileSagaReadProfile(),
    ProfileSagaSaveProfile(),
    ProfileSagaPortfolio()
  ]
}