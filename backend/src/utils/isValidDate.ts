function isValidDate(dateToTest: string): boolean {
  const date = new Date(dateToTest)
  
  return date.toUTCString() === 'Invalid Date' ? false : true
}

export default isValidDate