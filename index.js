const test = () => {
  if (true) {
    console.log('hello');
  }
};

const newRequire = () => {
  const a = true;
  if (a) {
    console.log('newRequire');
  } else {
    console.log('null');
  }
};

const Require2 = () => {
  console.log('Require2');
  console.log('调整');
};
