export const toggleAttribute = (attribute, value, remove, tag = 'html') => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0];
    const hasAttribute = element.getAttribute(attribute);
    if (remove && hasAttribute) element.removeAttribute(attribute);else element.setAttribute(attribute, value);
  }
};
export const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
export const scrollToElement = (element, to, duration) => {
  const start = element.scrollTop,
    change = to - start,
    increment = 20;
  let currentTime = 0;
  const animateScroll = function () {
    currentTime += increment;
    element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};