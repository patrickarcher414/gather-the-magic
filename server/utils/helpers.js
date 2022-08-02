const mtg = require('mtgsdk')

const mtgGetAllCards = () => new Promise( (resolve, reject) => {
  mtg.card.all({ supertypes: 'legendary' })
  .on('data', function (cards) {
    resolve(cards)
  }).on('error', (err) => {
    reject(err)
  })
})

module.exports = {
  mtgGetAllCards
}