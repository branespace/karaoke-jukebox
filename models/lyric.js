var mongoose = require('mongoose');

var lyricSchema = new mongoose.Schema({
  title:  {type: String, required: true},
  author: {type: String, default: 'Anonymous'},
  genre: String,
  mp3file: {type:  String, required: true, unique: true, validate: URISafe},
  lyrics: [{text: String,
            beatDuration: Number,
            beatIncrements: [Number]
          }]
});

function URISafe(value) {
  return value.match(/^[A-Za-z0-9-~._]+$/);
}

var Lyric = module.exports = exports = mongoose.model('Lyric', lyricSchema);
