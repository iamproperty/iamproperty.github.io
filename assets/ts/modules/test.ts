export const describe = (desc, fn): void => {
  console.log(desc);
  fn();
};

export const it = (desc, fn): void => {
  try {
    const result = fn();

    if (result && typeof result.then === 'function') {
      const pendingTests = globalThis.__unitTestPromises || [];
      globalThis.__unitTestPromises = pendingTests;

      pendingTests.push(
        result
          .then(() => {
            console.log(`\x1b[32m ${desc} \x1b[0m`);
          })
          .catch((error) => {
            console.log(`\x1b[31m ${desc} \x1b[0m`);
            console.error(error);

            if (typeof process !== 'undefined') {
              process.exitCode = 1;
            }
          })
      );

      return;
    }

    console.log(`\x1b[32m ${desc} \x1b[0m`);
  } catch (error) {
    console.log(`\x1b[31m ${desc} \x1b[0m`);
    console.error(error);

    if (typeof process !== 'undefined') {
      process.exitCode = 1;
    }
  }
};

export const expect = (isTrue): void => {
  if (!isTrue) {
    throw new Error();
  }
};
