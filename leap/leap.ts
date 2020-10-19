function isLeapYear(year: number): Boolean {
  if(!year){
    throw new Error(`This function requires one, type number, argument of the year to be passed, thank you. `)
  }
  let isLeapYearValue: Boolean = false 
  if(year % 4 === 0) isLeapYearValue = true
  if(year % 100 === 0 && year % 400 !== 0) isLeapYearValue = false

  return isLeapYearValue
}

export default isLeapYear