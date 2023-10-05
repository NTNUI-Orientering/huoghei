const dateMatcher = /(\d{4})-(\d{2})-(\d{2})/;
/**
 * Parses a dateString on format YYYY-MM-DD to a date object
 * @param dateString
 * @returns A new Date object (zulu time)
 */
export const parseDate = (dateString: string) => {
  const match = dateString.match(dateMatcher);
  if (match === null) {
    throw new Error('Unable to parse date');
  }
  return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
};

//console.log(parseDate("2023-10-05").toString())
