import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { changeType, checkPWDStrength } from './password.ts';

const { document } = installTestDom();

describe('Password module', () => {
  it('toggles password input visibility', () => {
    const wrapper = createElement('div');
    const input = createElement('input', { type: 'password' });
    input.type = 'password';
    const toggle = createElement('span', { dataAltClass: 'is-visible' });
    const button = createElement('button', { class: 'is-hidden' });
    append(toggle, button);
    append(wrapper, input, toggle);

    changeType(toggle);
    toggle.dispatchEvent(new Event('click'));

    expect(input.getAttribute('type') === 'text');
    expect(button.getAttribute('class') === 'is-visible');
  });

  it('writes password strength feedback without the breach check when already checked', () => {
    const input = createElement('input', {
      dataStrengthChecker: 'strength',
      minlength: '8',
      value: 'Aa1!aaaa',
    });
    const feedback = createElement('div', { id: 'strength', class: 'invalid-feedback' });
    append(document.body, input, feedback);

    checkPWDStrength(input, 'success');

    expect(feedback.getAttribute('data-strength') === '5');
    expect(feedback.innerHTML.includes('Very strong'));
    expect(!feedback.classList.contains('invalid-feedback'));
  });
});
