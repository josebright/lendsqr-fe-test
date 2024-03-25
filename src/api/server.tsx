import { createServer, Model } from 'miragejs'
import data from '../utils/MockAPIs/database.json'

export function makeServer ({ environment = 'production' } = {}): void {
  createServer({
    environment,
    models: {
      user: Model
    },

    seeds (server) {
      server.db.loadData({
        users: data
      })
    },

    routes () {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.db.users
      })
    }
  })
}
