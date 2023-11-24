//combineReducers method that allow us to create big reducer from smaller ones 
import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer';
import {categoriesReducer} from './categories/categories.reducer';
//we are going to pass object with the keys and the values the name of the reduce slice then the actual reducer itself 
export const rootReducer =combineReducers({
    user: userReducer, 
    categories: categoriesReducer, 
})