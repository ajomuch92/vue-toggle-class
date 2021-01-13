import Vue from 'vue';

export const vueClassToggle = Vue.directive('class-toggle', {
  inserted: (el, binding) => {
    directiveHandler(el, binding);
  },
  update: (el, binding) => {
    removeListeners(el, binding);
    directiveHandler(el, binding);
  },
  unbind: (el, binding) => {
    removeListeners(el, binding);
  }
});

function directiveHandler(el, binding) {
  const value = binding.value;
  if(typeof value !== 'object')
    return;
  const keys = Object.keys(value);
  if(keys.length == 0)
    return;
  if(!keys.includes('if') && !keys.includes('do'))
    return;
  const doAction = value['do'];
  if(!doAction.includes('add') && !doAction.includes('remove') && !doAction.includes('toggle'))
    return;
  const onSelector = value['on'];
  const toSelector = value['to'];
  const event = value['if'];
  if(onSelector) {
    const firstChar = onSelector[0];
    if(firstChar === '#') {
      const element = document.querySelector(onSelector);
      element.addEventListener(event, () => listener(doAction, el, toSelector));
    } else {
      return;
    }
  } else {
    el.addEventListener(event, () => listener(doAction, el, toSelector));
  }
}

function removeListeners(el, binding) {
  let value;
  if(binding.oldValue)
    value = binding.oldValue;
  else
    value = binding.value;
  const event = value['if'];
  const onSelector = value['on'];
  const toSelector = value['to'];
  if(onSelector) {
    const element = document.getElementById(onSelector);
    if(element)
      element.removeEventListener(event, () => listener(toSelector));
  } else {
    el.removeEventListener(event, () => listener(toSelector));
  }
}


function listener(actionCommand, ownElement, toSelector) {
  const split = actionCommand.split(' ');
  const action = split[0];
  const className = split[1];
  if(toSelector) {
    const firstChar = toSelector[0];
    let elements;
    if(firstChar === '.') {
      const classNameSelector = toSelector.replace('.');
      elements = document.getElementsByClassName(classNameSelector);
    } else if(firstChar === '#') {
      elements = document.querySelector(toSelector);
    } else {
      elements = document.getElementsByTagName(toSelector);
    }
    if(elements.length) {
      for(const el of elements) {
        classHandler(el, action, className);
      }
    } else {
      classHandler(elements, action, className) 
    }
  } else {
    classHandler(ownElement, action, className) 
  }
}

function classHandler(element, action, className) {
  if(action == 'add') {
    element.classList.add(className)
  } else if(action == 'remove') {
    element.classList.remove(className)
  } else {
    element.classList.toggle(className)
  }
}