const connection = require('../config/connection')
const { User } = require('../models')

connection.on('open', async () => {
  
  await User.deleteMany()
  
  await User.create({
    username: 'Sosa',
    email: 'cheif.keef@email.com',
    password: 'supersecretpass'
  })
  process.exit(0)
})