/**
 * @Created by Dragon
 * @Since 2019.11.11
 * @updated by Bluepine
 * @updated at 2019.11.22
 * Here are async task process functions.
 * - get idiom list
 * - save new idiom
 * - update idiom
 */

import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { SERVER_ADDRESS,
    LOAD_IDIOMS, LOADED_IDIOMS, 
    LOAD_CLASSIFYLIST, LOADED_CLASSIFYLIST,
    ADD_IDIOM, ADDED_IDIOM,
    UPDATE_IDIOM, UPDATED_IDIOM, DELETE_IDIOM, DELETED_IDIOM, ADD_CLASSIFY} from '../constants';

//Get idiom list
export function* fetchIdiomList() {    
    const url = SERVER_ADDRESS + 'idiom/getlist';
    const response = yield call(fetch, url);
    const data = yield response.json();
    yield put( { type: LOADED_IDIOMS, data: data.idioms});
}

export function* loadIdioms() {
    yield takeLatest(LOAD_IDIOMS, fetchIdiomList);
}

//Get classification list
export function* fetchClassifyList() {
    const url = SERVER_ADDRESS + 'classify/getlist';
    const response = yield call(fetch, url);
    const data = yield response.json();
    yield put( { type: LOADED_CLASSIFYLIST, data: data.classifyList});
}

export function* loadClassifyList() {
    yield takeLatest(LOAD_CLASSIFYLIST, fetchClassifyList);
}

//Add classify
export function* postClassifyRegister(action) {

    const url = SERVER_ADDRESS + 'classify/create';
    const response = yield call(fetch, url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.classify)
    });
    
    const data = yield response.json();
    if (data.result) {
        const url = SERVER_ADDRESS + 'classify/getlist';
        const response = yield call(fetch, url);
        const data = yield response.json();
        yield put( { type: LOADED_CLASSIFYLIST, data: data.classifyList});
    }
}

export function* addClassify() {
    yield takeLatest(ADD_CLASSIFY, postClassifyRegister);
}

//Add idiom
export function* postIdiomRegister(action) {
    const url = SERVER_ADDRESS + 'idiom/register';
    const response = yield call(fetch, url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.idiom)
    });
    
    const data = yield response.json();
    yield put( { type: ADDED_IDIOM, idiom: data.idiom});
}

export function* addIdiom() {
    yield takeLatest(ADD_IDIOM, postIdiomRegister);
}

//Update idiom
export function* postIdiomUpdate(action) {    
    const url = SERVER_ADDRESS + 'idiom/update';
    const response = yield call(fetch, url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.idiom)
    });
    
    const data = yield response.json();
    yield put( { type: UPDATED_IDIOM, idiom: data.idiom});
}

export function* updateIdiom() {
    yield takeLatest(UPDATE_IDIOM, postIdiomUpdate);
}

//Delete idiom
export function* postIdiomDelete(action) {
    const url = SERVER_ADDRESS + 'idiom/delete';
    yield call(fetch, url, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: action.id})
    });
    
    yield put( { type: DELETED_IDIOM, id: action.id});
}

export function* deleteIdiom() {
    yield takeLatest(DELETE_IDIOM, postIdiomDelete);
}
//Yield All
export default function* rootSaga() {
    yield fork(loadIdioms)
    yield fork(loadClassifyList)
    yield fork(addClassify)
    yield fork(addIdiom)
    
    // yield all([loadIdioms(), loadClassifyList(), addClassify(), addIdiom(), updateIdiom(), deleteIdiom()]);
}