/*  
* Written by Pooh, 2019-11-08 
* Updated by Dragon, 2019-11-13
*/

import { LOADED_IDIOMS, LOADED_CLASSIFYLIST, ADDED_CLASSIFY, ADDED_IDIOM, UPDATED_IDIOM, DELETED_IDIOM, CHANGE_CATEGORY } from "../../constants";

function rootReducer(state = {totalIdioms: [], idioms:[], classifyList:[], currentId: 1}, action) {
    if (action.type === LOADED_IDIOMS) {
        return {
            ...state,
            totalIdioms: action.data,
            idioms: action.data.filter(idiom => idiom.classifyId === state.currentId)
        };
    }

    if (action.type === LOADED_CLASSIFYLIST) {
        return {
            ...state,
            classifyList: action.data,
        };
    }

    if (action.type === ADDED_CLASSIFY) {
        const temp = [...state.classifyList, action.classify];
        return {
            ...state,
            classifyList: temp
        };
    }

    if (action.type === ADDED_IDIOM) {
        const temp = [...state.totalIdioms, action.idiom];
        return {
            ...state,
            totalIdioms: temp,
            idioms: temp.filter(idiom => idiom.classifyId === state.currentId)
        };
    }

    if (action.type === UPDATED_IDIOM) {
        const idiomIndex = state.totalIdioms.findIndex(data => data.id === action.idiom.id);
        const temp = [...state.totalIdioms.slice(0, idiomIndex), action.idiom, ...state.totalIdioms.slice(idiomIndex + 1)];
        return {
            ...state,
            totalIdioms: temp,
            idioms: temp.filter(idiom => idiom.classifyId === state.currentId)
        };
    }

    if (action.type === DELETED_IDIOM) {
        const temp = state.totalIdioms.filter(idiom => idiom.id !== action.id);
        return {
            ...state,
            totalIdioms: temp,
            idioms: temp.filter(idiom => idiom.classifyId === state.currentId)
        };
    }

    if (action.type === CHANGE_CATEGORY) {
        return {
            ...state,
            idioms: state.totalIdioms.filter(idiom => parseInt(idiom.classifyId, 10) === action.id),
            currentId: action.id
        };
    }

    return state;
}
export default rootReducer;