import {
	trimString,
	removeObjPropImmutably,
	getIsValidNumber
} from './Utils'

describe('trimString util', () => {
  it('Positive trimming cases', () => {
    expect(trimString('LongName', 5)).toBe('LongN...')
    expect(trimString('LongName', 4)).toBe('Long...')
    expect(trimString('LongName', 10)).toBe('LongName')
    expect(trimString('   LongName   ', 3)).toBe('Lon...')
  })

  it('Negative trimming cases', () => {
    expect(trimString('     ', 4)).toBe('     ')
    expect(trimString(null, 4)).toBeNull()
    expect(trimString(undefined, 4)).toBeUndefined()
  })
})

describe('getIsValidNumber util', () => {
  it('Positive checking cases', () => {
		[1, 0, -1, 0.5, '123', '321asd']
			.forEach(item => expect(getIsValidNumber(item)).toBeTruthy())
  })

  it('Negative checking cases', () => {
    ['asd321', 'qwe', Infinity, undefined, null, [], {}]
			.forEach(item => expect(getIsValidNumber(item)).toBeFalsy())
  })
})

describe('removeObjPropImmutably util', () => {
  it('Positive removing cases', () => {
    expect(removeObjPropImmutably({ a: 1, b: 2 }, 'b')).toMatchObject({ a: 1 })
    expect(removeObjPropImmutably({ a: () => {}, b: 2 }, 'a')).toMatchObject({ b: 2 })
  })

  it('Negative removing cases', () => {
    [undefined, null, [], {}, 'string', 1]
			.forEach(item => expect(removeObjPropImmutably(item)).toMatchObject({}))
  })
})
