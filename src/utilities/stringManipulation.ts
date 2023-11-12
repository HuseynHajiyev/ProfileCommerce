export const capitalizeString = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const regexCheckUsername = (username: string): boolean => {
  const alphaNumericWithUnderscoreRegex = /^[A-Za-z0-9_]+$/;
  const containsLetterRegex = /[A-Za-z]/;

  return alphaNumericWithUnderscoreRegex.test(username) && containsLetterRegex.test(username);
}