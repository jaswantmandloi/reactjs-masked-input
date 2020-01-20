export function createMask (string) {
  let copiedString = string
  const twoDigitRegex = /^[0-9]{1,2}[:.,-]?$/i
  copiedString = destroyMask(copiedString)
  if (twoDigitRegex.test(copiedString)) {
    return copiedString.replace(/(\d{2})/, '($1)')
  }

  const threeDigitRegex = /(\d{2})(\d{2})(\d{2})/
  copiedString = destroyMask(copiedString)
  if (threeDigitRegex.test(copiedString)) {
    return copiedString.replace(threeDigitRegex, '($1)-$2-$3')
  }

  return string
}

export function destroyMask (string) {
  return string.replace(/\D/g, '').substring(0, 8)
}
