import {
  getLocalStorage,
  setLocalStorage,
  removeItemLocalStorage,
} from './localStorage';

export const getProfileFromLS = (key: string) => {
  const result = getLocalStorage(key);
  return result;
};

export const setProfileFromLS = (key: string, data: any) => {
  setLocalStorage(key, data);
};

export const removeProfileFromLS = (key: string) => {
  removeItemLocalStorage(key);
};
