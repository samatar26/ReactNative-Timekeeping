export const partial = (fn, ...args) => fn.bind(null, ...args);
export const generateId = () => Math.floor(Math.random()*10000);
