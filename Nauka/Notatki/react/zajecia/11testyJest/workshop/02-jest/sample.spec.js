// Implementation and test cases
const divide = (a, b) => (b !== 0 ? a / b : 'Division by zero is illegal!')
const multiply = (a, b) => a * b

describe('calculator', () => {
  describe('divide', () => {
    it('should divide 5 by 2', () => {
      let result = divide(5, 2)
      let expected = 2.5
      expect(result).toBe(expected)
    })

    it('should divide 50 by 10', () => {
      result = divide(50, -10)
      expected = -5
      expect(result).toBe(expected)
    })

    it('should divide -15 by -3', () => {
      result = divide(-15, -3)
      expected = 5
      expect(result).toBe(expected)
    })

    it('should divide 12.5 by 10', () => {
      result = divide(12.5, 10)
      expected = 1.25
      expect(result).toBe(expected)
    })

    it('should divide -9 by 3', () => {
      result = divide(-9, 3)
      expected = -3
      expect(result).toBe(expected)
    })

    it('should divide 2 by 0', () => {
      result = divide(2, 0)
      expected = 'Division by zero is illegal!'
      expect(result).toBe(expected)
    })
  })

  describe('multiply', () => {
    it('multiplies 2 by 2', () => {
      expect(multiply(2, 2)).toBe(4)
    })
  })
})
