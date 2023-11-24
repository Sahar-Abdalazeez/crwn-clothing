
import {CATEGORIES_ACTION_TYPES} from './categories.types'

export const  CATEGORIES_INITIAL_STATE = {
    categoriesMap: null
}
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action)=>{
   const {payload, type}= action ;

   switch(type){
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP: 
    return {...state, categoriesMap: payload  }

    default: 
    return state ; 
   }
}