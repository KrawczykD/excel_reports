const addData = (OTIF, OPEN) => {
  return {
    type: "ADD_DATA",
    OTIF: OTIF,
    OPEN: OPEN,
  };
};

export default addData;
