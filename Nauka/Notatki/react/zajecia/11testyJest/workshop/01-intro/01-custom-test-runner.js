// Custom test framework
const expect = result => {
  return {
    toBe: expected => {
      if (result !== expected) {
        throw new Error(`${result} is not equal to expected value: ${expected}`)
      }
    },
  }
}

const test = (testName, callback) => {
  try {
    callback()
    console.log('\x1b[32m%s\x1b[0m', `✅ PASSED - ${testName}`)
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ FAIL = ${testName}`)
    console.error(error)
  }
}

// Implementation and test cases
const divide = (a, b) => {
  if (b === 0) {
    return 'Division by zero is illegal!'
  }
  return a / b
}

test('divide should divide 5 by 2', () => {
  const result = divide(5, 2)
  const expected = 2.5
  expect(result).toBe(expected)
})

test('divide should divide 50 by 10', () => {
  const result = divide(50, -10)
  const expected = -5
  expect(result).toBe(expected)
})

test('divide should divide -15 by -3', () => {
  const result = divide(-15, -3)
  const expected = 5
  expect(result).toBe(expected)
})

test('divide should divide 12.5 by 10', () => {
  const result = divide(12.5, 10)
  const expected = 1.25
  expect(result).toBe(expected)
})

test('divide should divide -9 by 3', () => {
  const result = divide(-9, 3)
  const expected = -3
  expect(result).toBe(expected)
})

test('divide should divide 2 by 0', () => {
  const result = divide(2, 0)
  const expected = 'Division by zero is illegal!'
  expect(result).toBe(expected)
})
