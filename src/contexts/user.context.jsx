import { createContext, useEffect, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//action types 
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRNT_USER'
}

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log('actions', action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,//spread the previous state 
        currentUser: payload
      }
    default:
      throw new Error(`unhandled type ${type} in user reducer`)


  }
}


export const UserProvider = ({ children }) => {
  //we don't need this when we use reducer 
  // const [currentUser, setCurrentUser] = useState(null);

  //initial state for using the reducer

  const INITIAL_STATE = {
    currentUser: null
  }


  //THIS IS HOW WE USE USE REDUCER 
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log('currentUser', currentUser)
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }
  const value = { currentUser, setCurrentUser };


  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        //if the user exists "logged in " then we create userDoncument
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
