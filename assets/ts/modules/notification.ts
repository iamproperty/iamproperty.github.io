function setupNotification(element): void {
  // Add toast to notification holder
  if (element.hasAttribute('data-type') && element.getAttribute('data-type') == 'toast') {
    let holder = document.querySelector('.notification__holder');

    if (!holder) {
      holder = document.createElement('div');
      holder.classList.add('notification__holder');
      holder.classList.add('container');
      document.querySelector('body').appendChild(holder);
    }

    if (!element.closest('.notification__holder')) holder.appendChild(element);
  }

  element.setAttribute('role', 'alert');

  // Create a dissmissable button
  element.addEventListener(
    'click',
    function (e) {
      if (
        event &&
        event.target instanceof HTMLElement &&
        (event.target.closest('[data-dismiss-button]') || event.target.matches('[data-dismiss-button]'))
      ) {
        e.preventDefault();
        closeNotification(element);
      }
    },
    false
  );

  // Self disappearing alert
  if (element.hasAttribute('data-timeout')) {
    const timeOut = element.getAttribute('data-timeout');

    const timer = new Timer(function () {
      closeNotification(element);
    }, timeOut);

    element.addEventListener('mouseenter', () => {
      timer.pause();
    });

    element.addEventListener('mouseleave', () => {
      timer.resume();
    });
  }
}

function Timer(callback, delay): void {
  let timerId,
    start,
    remaining = delay;

  this.pause = function (): void {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function (): void {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

export const closeNotification = function (element): void {
  element.classList.add('d-none');
};

export default setupNotification;
