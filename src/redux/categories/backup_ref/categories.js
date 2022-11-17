// Action Types
const CHECKING_STATUS = 'CHECKING_STATUS';

// Initial State
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
const checkingStatus = () => ({
  type: CHECKING_STATUS,
});

// Exports
export { checkingStatus };
export default reducer;
