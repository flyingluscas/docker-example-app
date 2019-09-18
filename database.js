const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017/docker-example-app', {
  useNewUrlParser: true
})

const Message = mongoose.model('Message', {
  text: String
})

module.exports = {
  Message,
}
