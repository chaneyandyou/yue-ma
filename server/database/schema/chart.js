const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chartSchema = new Schema({
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

mongoose.model('Chart', chartSchema)
