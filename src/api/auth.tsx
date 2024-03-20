import { type IUser } from '../utils/Interfaces'
import db from '../Database/db'

export const authenticateUser = async (email: string, password: string): Promise<IUser | undefined> => {
  let user = await db.users.where({ email, password }).first()

  if (!user) {
    const response = await fetch(`/api/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)

    if (response.ok) {
      const potentialUsers: IUser[] | IUser = await response.json()
      let specificUser: IUser | undefined
      if (Array.isArray(potentialUsers)) {
        specificUser = potentialUsers.find(u => u.email === email)
      } else if ('email' in potentialUsers && potentialUsers.email === email) {
        specificUser = potentialUsers
      }

      if (specificUser) {
        user = specificUser
        await db.users.add(user)
      }
    }
  }
  return user
}
