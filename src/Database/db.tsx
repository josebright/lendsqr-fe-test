import Dexie, { type Table } from 'dexie'
import { type IUser } from '../utils/Interfaces/index'

class MyAppDatabase extends Dexie {
  users!: Table<IUser, string>

  constructor () {
    super('MyAppDatabase')
    this.version(1).stores({
      users: 'id, index, guid, fullName, email, profilePicture, password, address, customers'
    })
    this.users = this.table('users')
  }
}

const db = new MyAppDatabase()
export default db
