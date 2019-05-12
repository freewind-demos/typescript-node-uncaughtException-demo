process.on('unhandledRejection', (error: any, promise: any) => {
  console.log('### caught unhandledRejection:', error)
})

async function promiseError() {
  return new Promise((resolve, reject) => {
    throw new Error('my-promise-error')
  })
}

promiseError();
