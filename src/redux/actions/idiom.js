/*  
* Written by Pooh, 2019-11-08 
* Updated by Dragon, 2019-11-13, for integrating redux-saga.
*/

import { ADD_IDIOM, UPDATE_IDIOM, DELETE_IDIOM, CHANGE_CATEGORY, LOAD_IDIOMS, LOAD_CLASSIFYLIST, ADD_CLASSIFY } from '../../constants';

export function loadIdioms() {
    return { type: LOAD_IDIOMS }
}

export function loadClassifyList(data) {
    return { type: LOAD_CLASSIFYLIST, data }
};

export function addClassify(classify) {
    return { type: ADD_CLASSIFY, classify }
};

export function addIdiom(idiom) {
    return { type: ADD_IDIOM, idiom }
};

export function updateIdiom(idiom) {
    return { type: UPDATE_IDIOM, idiom }
};

export function deleteIdiom(id) {
    return { type: DELETE_IDIOM, id }
};

export function changeCategory(id) {
    return { type: CHANGE_CATEGORY, id }
};

export default loadIdioms;