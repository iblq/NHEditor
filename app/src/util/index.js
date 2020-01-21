export const tryCatch = async promise => {
  try {
    const res = await promise
    return [res, null]
  } catch (err) {
    return [null, err]
  }
}

export const isNeedPswd = str => {
  const newStr = str.toLowerCase()

  const keys = ['Permission denied', 'incorrect password', 'Password:Sorry, try again.']
  return !!keys.find(k => newStr.includes(k.toLowerCase()))
}
