const addCustomer = (customer) => {
  return {
    type: "ADD_CUST",
    customer,
  };
};

export default addCustomer;
