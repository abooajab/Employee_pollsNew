const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching action: ", action);
  let result = next(action);
  console.log("next state ", store.getState());
  console.groupEnd(action.type);
  return result;
};

export default logger;
