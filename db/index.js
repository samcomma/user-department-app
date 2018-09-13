const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL, { logging: false })

const User = conn.define('user', {
  name: Sequelize.STRING
})

const Department = conn.define('department', {
  name: Sequelize.STRING
})

User.belongsTo(Department)
Department.hasMany(User)



const syncAndSeed = ()=> {
  return conn.sync({force: true})
    .then(async()=> {
      const [moe, larry, curly] = await Promise.all([
        User.create({name: 'moe'}),
        User.create({name: 'larry'}),
        User.create({name: 'curly'})
      ])
      const [admin, hr, engineering] = await Promise.all([
        Department.create({name: 'Admin'}),
        Department.create({name: 'HR'}),
        Department.create({name: 'Engineering'})
      ])
      await Promise.all([
        admin.addUsers([moe, larry]),
        hr.addUsers([curly])
      ])
  })
}

module.exports = {
  syncAndSeed,
  models: {
    User,
    Department
  }
}