// https://jinhyukoo.github.io/web/2021/04/10/useDebounce.html
const useDebounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export default useDebounce;
