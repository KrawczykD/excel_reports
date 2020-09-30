const addWeekNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_WEEK":
      return (state = action.date);

    default:
      return state;
  }
};

export default addWeekNumberReducer;
