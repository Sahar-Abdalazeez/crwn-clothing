import {compose , createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger'

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action)
    }
   
    console.log('action type: ',action.type);
    console.log('action payload: ',action.payload);
    console.log('current state: ',store.getState());
    next(action)
    console.log('current state: ',store.getState());

}
const middlewares = [loggerMiddleware];

 const composedEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer, undefined , composedEnhancers)