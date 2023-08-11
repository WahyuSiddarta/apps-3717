/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_TS':
      return {
        ...state,
        ts: action.payload,
      };

    default:
      return state;
  }
};
