const Address = require('./address.model');

async function get(id) {
    return await Address.get(id);
  }

  module.exports = {get}