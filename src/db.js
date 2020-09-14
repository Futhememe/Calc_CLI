const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({calcs: [0]}).write()
const Calcs = db.get('calcs')
module.exports = {
  db,
  Calcs,
}
