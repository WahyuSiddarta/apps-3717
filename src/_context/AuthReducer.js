/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: '',
        isAuth: false,
      };

    default:
      return state;
  }
};
