const receivesAFunction = (cb) => {
  cb();
};

const returnsANamedFunction = () => {
  return function greet() {
    console.log('hi')
  }
};

const returnsAnAnonymousFunction = () => {
  return ()=> console.log('hi')
};
