const ADD = 'ADD';

export const testReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};
