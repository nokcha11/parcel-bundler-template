console.log('hello world!!!');

async function test() {
  const promise = Promise.resolve('hello~!!')
  console.log(await promise);
}
test();