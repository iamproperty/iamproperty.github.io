
export const describe = (desc, fn):void => {

  console.log(desc);
  fn();
}

export const it = (desc, fn):void => {
  try {
    fn();
    console.log(`\x1b[32m ${desc} \x1b[0m`)
  } catch (error) {
    console.log(`\x1b[31m ${desc} \x1b[0m`)
    console.error(error);
  }
}

export const expect = (isTrue):void => {
  if (!isTrue) {
    throw new Error();
  }
}
