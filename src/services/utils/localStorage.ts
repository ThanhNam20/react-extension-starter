const getLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
};

const setLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  getLocalStorage,
  setLocalStorage,
  removeItemLocalStorage,
  clearLocalStorage,
};
