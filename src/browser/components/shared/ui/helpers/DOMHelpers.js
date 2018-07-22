// User device specs detection
export function userDevice() {
  const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
  const touchscreen = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
  let type = 'xl';
  if (viewport.width < 375) {
    type = 'xs';
  } else if (viewport.width < 768) {
    type = 'sm';
  } else if (viewport.width < 991) {
    type = 'md';
  } else if (viewport.width < 1199) {
    type = 'lg';
  }
  return { viewport, touchscreen, type };
}

// Scroll event handlers for smartphones and tablets
function artificialPreventDefault(e) {
  const event = e !== undefined ? e : window.event;
  if (event.preventDefault) {
    event.preventDefault();
  }
  event.returnValue = false;
}
export function disableScroll() {
  window.ontouchmove = artificialPreventDefault;
}
export function enableScroll() {
  window.ontouchmove = null;
}

// recursively checks if a DOM element is the child of another
export function isChildOf(child, parent) {
  if (child.parentNode === parent) {
    return true;
  }
  if (child.parentNode === null) {
    return false;
  }
  return isChildOf(child.parentNode, parent);
}
