const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

const clearLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

const existInLocalStorage = (key) => {
  return localStorage.hasOwnProperty(key);
};

export default { setLocalStorage, clearLocalStorage, existInLocalStorage };
