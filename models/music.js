const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  artist: {
    type: String,
    required: [true, 'artist name is required']
  },
  genre: {
    type: String
  }
});

const Music = mongoose.model('music', MusicSchema);

module.exports = Music;
