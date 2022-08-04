const connection = require('../config/connection')
const { User, Comment, Card } = require('../models')

connection.on('open', async () => {

  await User.deleteMany()

  await User.create({
    username: 'Sosa',
    email: 'cheif.keef@email.com',
    password: 'supersecretpass'
  })


  process.exit(0)
})