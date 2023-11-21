import {createContext, useReducer, useEffect} from 'react';
import AuthReducer from './AuthReducer';
import {_getData, _removeData, _storeData} from '../_helpers/localStorage';
import {navigationRef} from '../../RootNavigation';

const initialState = {
  user: '',
  isAuth: false,
};
export const AuthContext = createContext(initialState);

const _initLogin = async signIn => {
  try {
    let user = await _getData('user');
    user = JSON.parse(user);
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!user?.user_id) {
      signIn(user?.user_id);
    }
  } catch (error) {
    console.log('error ', error);
  }
};

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

  useEffect(() => {
    _initLogin(signIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
