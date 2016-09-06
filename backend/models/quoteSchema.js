var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
   loveNumber :{
        type: Number,
        default: 0
    },
    comments: [String]
});

module.exports = mongoose.model("Quote", quoteSchema);