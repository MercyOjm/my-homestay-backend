const imageSchema = new mongoose.Schema({
    id: {
        type: String
      },
      medium_url: {
        type: String
      },
      picture_url: {
        type: String
      }
    
}) 

module.exports = mongoose.model('Image', imageSchema);