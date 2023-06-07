

const addressSchema = new mongoose.Schema({
   
    id: {
        type: String
      },
      street: {
        type: String
      },
      street_number: {
        type: String
      },
      postal_code: {
        type: String
      },
      city: {
        type: String
      },
      district: {
        type: String
      },
      country: {
        type: String
      },
      country_code: {
        type: String
      },
      location: {
        type: {
          type: String
        },
        coordinates: {
          latitude: {
            type: String
          },
          longitude: {
            type: String
          }
        },
        is_location_exact: {
          type: Boolean
        }
      }
}) 

module.exports = mongoose.model('Address', addressSchema);