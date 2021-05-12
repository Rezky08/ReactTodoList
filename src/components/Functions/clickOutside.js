const handleClickOutside = (wrapper, event, callback) => {
  if (wrapper && !wrapper.current.contains(event.target)) {
    callback();
  }
};
export { handleClickOutside };
