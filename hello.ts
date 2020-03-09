process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.log('### caught unhandledRejection:', reason)
})

process.on('uncaughtException', (error: Error) => {
  console.log('### caught uncaughtException:', error)
})


async function promiseError() {
  return new Promise((resolve, reject) => {
    // will be caught by 'unhandledRejection'
    throw new Error('my-promise-error')
  })
}

setTimeout(() => {
  // will be caught by 'uncaughtException'
  throw new Error('test-error');
}, 1000);

promiseError();
