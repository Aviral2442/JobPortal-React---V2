export const toPascalCase = value => value.replace(/[-_ ]+/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
export const generateInitials = (name = '') => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};
export const abbreviatedNumber = val => {
  const s = ['', 'k', 'm', 'b', 't'];
  if (val === 0) return 0;
  const sNum = Math.floor(Math.log10(val) / 3);
  let sVal = parseFloat((sNum != 0 ? val / Math.pow(1000, sNum) : val).toPrecision(2));
  if (sVal % 1 != 0) {
    sVal = Number.parseInt(sVal.toFixed(1));
  }
  return sVal + s[sNum];
};