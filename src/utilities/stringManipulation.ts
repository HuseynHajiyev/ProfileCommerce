export const capitalizeString = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const regexCheckUsername = (username: string): boolean => {
  const alphaNumericWithUnderscoreRegex = /^[A-Za-z0-9_]+$/;
  const containsLetterRegex = /[A-Za-z]/;

  return alphaNumericWithUnderscoreRegex.test(username) && containsLetterRegex.test(username);
}

export const capitalizeEachWord = (string: string): string => {
  return string.split(' ').map(word => capitalizeString(word)).join(' ');
}

export const lowercaseEachWord = (string: string): string => {
  return string.split(' ').map(word => word.toLowerCase()).join(' ');
}

export const lowercaseUrl = (string: string): string => {
  return string.split('-').map(word => word.toLowerCase()).join('-');
}


// remove non alphanumeric characters but keep the whitespace
export const removeNonAlphaNumeric = (string: string): string => {
  return string.replace(/[^A-Za-z0-9 ]/g, '');
}

export const categoryUrlSwitch = (category: string): string => {
  const sterilizedCategory = lowercaseEachWord(removeNonAlphaNumeric(category));
  switch (sterilizedCategory) {
    case 'mens clothing':
      return 'mens-clothing';
    case 'womens clothing':
      return 'womens-clothing';
    default:
      return lowercaseEachWord(category);
  }
}

export const urlCategorySwitch = (category: string): string => {
  switch (lowercaseUrl(category)) {
    case 'mens-clothing':
      return 'Men\'s Clothing';
    case 'womens-clothing':
      return 'Women\'s Clothing';
    default:
      return capitalizeString(category);
  }
}