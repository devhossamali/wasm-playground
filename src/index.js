import loadWasm from '@/wasm/src/lib.rs';

console.log('I am alive!!!');

loadWasm().then(result => {
  const { get_total } = result.instance.exports;
  console.log("Number:: ", get_total(5000000));
});