export const storage = {
  get: (key: string) => (typeof window !== 'undefined' ? localStorage.getItem(key) : null),
  set: (key: string, value: string) => {
    if (typeof window !== 'undefined') localStorage.setItem(key, value);
  },
};
