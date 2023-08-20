const onClickOutsideDirective = {
  bind(el, binding, vnode) {
    // Define the callback function
    const onClickOutside = event => {
      // Check if the clicked element is outside the bound element
      if (!(el === event.target || el.contains(event.target))) {
        // Call the provided callback function
        binding.value(event);
      }
    };

    // Attach the event listener
    document.addEventListener('click', onClickOutside);

    // Store the event listener on the element
    el._onClickOutside = onClickOutside;
  },
  unbind(el) {
    // Remove the event listener when the element is unbound
    document.removeEventListener('click', el._onClickOutside);
    delete el._onClickOutside;
  },
};

export default onClickOutsideDirective;
