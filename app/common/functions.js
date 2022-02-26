
export const isNull = value => value===null

export const isUndefined = value => value===undefined

export const hasValue = value => !isNull(value) && !isUndefined(value)

