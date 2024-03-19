import { createServer, Model, Server } from 'miragejs'
import data from '../utils/MockAPIs/users.json'

export function makeServer (): void {
  createServer({
    models: {
      user: Model
    },

    routes () {
      this.namespace = 'api'

      this.get('/users', () => {
        return data
      })
    }
  })
}
