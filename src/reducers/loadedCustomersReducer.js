const loadedCustomers = (state = [], action) => {
  switch (action.type) {
    case "ADD_CUST":
      return [...state, action.customer];

    default:
      return [...state];
  }
};

export default loadedCustomers;
