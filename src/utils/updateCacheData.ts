export const getCachedData = (key: string) => {
  const cachedData = localStorage.getItem(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

export const updateLocalStorageData = (key: string, data: string) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, data);
};
