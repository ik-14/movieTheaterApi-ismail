const { Show } = require('./Show')
const { User } = require('./User')

Show.belongsToMany(User, {through: 'user_show'})
User.belongsToMany(Show, {through: 'user_show'})

module.exports = {Show, User}