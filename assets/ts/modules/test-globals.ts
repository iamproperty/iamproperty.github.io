if (typeof globalThis.window === 'undefined') {
  Object.defineProperty(globalThis, 'window', {
    value: new EventTarget(),
    writable: true,
    configurable: true,
  });
}
