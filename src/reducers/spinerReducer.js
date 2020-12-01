const spinerState = (state = false, action) => {
  switch (action.type) {
    case "SPINER_CHANGE":
      return (state = action.toggle);
    default:
      return state;
  }
};

export default spinerState;
