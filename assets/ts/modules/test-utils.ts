/* eslint-disable */

export const append = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
  return parent;
};

export const silenceConsole = (callback) => {
  const originalConsole = {
    groupCollapsed: console.groupCollapsed,
    groupEnd: console.groupEnd,
    log: console.log,
    table: console.table,
  };

  console.groupCollapsed = () => {};
  console.groupEnd = () => {};
  console.log = () => {};
  console.table = () => {};

  try {
    return callback();
  } finally {
    console.groupCollapsed = originalConsole.groupCollapsed;
    console.groupEnd = originalConsole.groupEnd;
    console.log = originalConsole.log;
    console.table = originalConsole.table;
  }
};
