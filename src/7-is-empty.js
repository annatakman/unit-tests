export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    return (Object.entries(stringArrayOrObject).length === 0)
  }
}
