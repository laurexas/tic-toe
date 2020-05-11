export const loadState = () => {
  const newState = localStorage.getItem("state");
  if (newState) return JSON.parse(newState);
  return undefined;
};

export const saveState = (state) => {
  const newState = JSON.stringify(state);
  localStorage.setItem("state", newState);
};
