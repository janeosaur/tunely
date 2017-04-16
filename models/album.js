var mongoose = require('mongoose');
Schema = mongoose.Schema;

// Schema
var AlbumsSchema = new Schema ({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String]
})

// model

var Album = mongoose.model('Album', AlbumsSchema)

// export

module.exports = Author;
