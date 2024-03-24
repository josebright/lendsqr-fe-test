import { useState, useEffect } from 'react'
import db from '../Database/db'
import { type IUser } from '../utils/Interfaces'

interface UseUserReturnType {
  users: IUser[]
  loading: boolean
  error: string
}

export const useUser = (): UseUserReturnType => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const allUsers = await db.users.toArray()
        setUsers(allUsers)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch users')
        setLoading(false)
      }
    }

    void fetchUsers()
  }, [])

  return { users, loading, error }
}
