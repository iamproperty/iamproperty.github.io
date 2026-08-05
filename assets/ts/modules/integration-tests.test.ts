import { describe, expect, it } from './test.ts';
import { installTestDom } from './test-dom.ts';
import { silenceConsole } from './test-utils.ts';
import integrationTests from './integration-tests.ts';

const { window } = installTestDom();

describe('Integration tests module', () => {
  it('runs integration checks against an empty document', () => {
    silenceConsole(() => integrationTests());

    expect(window.integrationTestsIntro.includes('component or element'));
    expect(Array.isArray(window.integrationTests));
  });
});
