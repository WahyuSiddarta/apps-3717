import {createContext, useEffect, useReducer} from 'react';
import AuthReducer from './AuthReducer';
import {_removeData, _storeData} from '../_helpers/localStorage';
import {navigationRef} from '../../RootNavigation';

const initialState = {
  user: '',
  isAuth: false,
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  function signIn(user_id) {
    let user = {
      user_id,
    };
    try {
      let user_ = JSON.stringify(user);
      _storeData('user', user_);
    } catch (error) {
      console.error('error ', error);
    }
    dispatch({
      type: 'SIGN_IN',
      user,
    });
  }
  function signOut() {
    _removeData('user').catch(error => console.log('error ', error));
    navigationRef.navigate('auth_screen');
    dispatch({
      type: 'SIGN_OUT',
    });
  }

  // useEffect(() => {
  //   if (!state.isAuth) {
  //     navigationRef.navigate('auth_screen');
  //   }
  // }, [state]);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn: signIn,
        signOut: signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
