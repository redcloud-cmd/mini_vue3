import { findMax, twoSum } from './basic'

// 期望findMax([2, 6, 3])执行后结果为6
test('findMax([2, 6, 3])', () => {
    expect(findMax([2, 6, 3])).toBe(6)
})

// 期望twoSum([2, 3, 4, 6], 10)执行后结果为true
test('twoSum([2, 3, 4, 6], 10)', () => {
    expect(twoSum([2, 3, 4, 6], 10)).toBe(true)
})
