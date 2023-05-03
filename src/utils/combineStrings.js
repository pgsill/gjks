// combines truthy strings
export const combineStrings = (...strings) => strings.filter(Boolean).join(' ')
