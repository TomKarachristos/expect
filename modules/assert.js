/* eslint-disable no-console */
import inspect from 'object-inspect'

const formatString = (string, args) => {
  let index = 0
  return string.replace(/%s/g, () => inspect(args[index++]))
}

const assert = (condition, createMessage, ...extraArgs) => {
  const message = (typeof createMessage === 'string')
    ? formatString(createMessage, extraArgs)
    : createMessage(extraArgs)

  if (condition){
    console.log("Pass: ", message)
  }else{
    console.warn("Faild: ", message)
  }
}

export default assert
