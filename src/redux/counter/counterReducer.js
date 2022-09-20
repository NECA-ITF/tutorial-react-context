import ConstantTypes from "./ConstantTypes";

const INITIAL_STATE = {
  count: 0
}


const countReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantTypes.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      }

    case ConstantTypes.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
  
    default:
      return state;
  }
}


export default countReducer;