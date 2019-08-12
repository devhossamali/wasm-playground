import loadWasm from '@/wasm/src/lib.rs';


loadWasm().then(result => {
  const { get_total } = result.instance.exports;

  console.time("wasm");
  console.log(get_total(60000));
  console.timeEnd("wasm");

  console.time("js");
  console.log(getTotal(60000));
  console.timeEnd("js");
});


function getTotal(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}