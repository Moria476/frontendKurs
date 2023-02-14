import { findUser } from './users'

describe('Users', () => {
  it('should properly find user from fixed users set', () => {
    expect(findUser(1)).toEqual({ id: 1, name: 'Will', score: 100 })
  })

  it('should throw when userId is not present in the fixed users set', () => {
    const shouldThrow = () => findUser(5)
    expect(shouldThrow).toThrowError('User with ID 5 was not found.')
  })
})
