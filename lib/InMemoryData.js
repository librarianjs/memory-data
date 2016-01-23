'use strict'

class InMemoryData {
  constructor () {
    this.db = {}
  }

  get (id) {
    return Promise.resolve(this.db[id] || null)
  }

  put (record) {
    if (!(record && record.id)) {
      return Promise.reject('Invalid record')
    }
    this.db[record.id] = record
    return Promise.resolve()
  }

  getAll () {
    return Promise.resolve(Object.keys(this.db))
  }
}

module.exports = InMemoryData
