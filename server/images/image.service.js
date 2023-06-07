const Image = require('./images.model');

async function get(id) {
    return await Image.get(id);
  }

  module.exports = {get}