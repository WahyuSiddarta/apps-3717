import {createContext, useReducer} from 'react';
import GlobalReducer from './GlobalReducer';
import {allowedTheme, allowedLang} from '../_data/data';
import {_storeData} from '../_helpers/localStorage';

const initialState = {
  ts: 1,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function updateTS(ts) {
    dispatch({
      type: 'CHANGE_TS',
      payload: ts,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        updateTS: updateTS,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
