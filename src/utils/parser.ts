
export const Parser = (csvString: string): string[][] => {
  const findSeparator = csvString.split(';').length > csvString.split(',').length ? ';' : ','
  const vectorTable = csvString.split('\r\n').map((row) => row.split(findSeparator))

  // results['headers'] = vectorTable[0].map((header) => header.trim())

  // for (let i = 1; i < vectorTable.length; i++) {
  //   const row = vectorTable[i]
  //   for (let j = 0; j < row.length; j++) {
  //     const data = row[j].trim()
  //     const header = results['headers'][j]
  //     if (!results[header.toLowerCase()]) {
  //       results[header.toLowerCase()] = [data]
  //     } else {
  //       results[header.toLowerCase()].push(data)
  //     }
  //   }
  // }
 

  return vectorTable
}