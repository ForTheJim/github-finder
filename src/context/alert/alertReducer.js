export default (state, action) => {
  if (action.type === "SET_ALERT") {
    return action.payload;
  } else {
    return null;
  }
};
