import ConstantTypes from "./ConstantTypes";

export const increaseCount = (value = 1) => ({
  type: ConstantTypes.INCREASE_COUNT,
  payload: value
});


export const decreaseCount = (value = 1) => ({
  type: ConstantTypes.DECREASE_COUNT,
  payload: value
})