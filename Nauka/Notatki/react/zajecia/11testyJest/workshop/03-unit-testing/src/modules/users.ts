type User = {
  id: number
  name: string
  score: number
}

const users: User[] = [
  { id: 1, name: 'Will', score: 100 },
  { id: 2, name: 'John', score: 88 },
  { id: 3, name: 'Andrew', score: 95 },
]

export const findUser = (userId: number): User => {
  const user = users.find(({ id }) => userId === id)

  if (!user) {
    throw new Error(`User with ID ${userId} was not found.`)
  }

  return user
}
