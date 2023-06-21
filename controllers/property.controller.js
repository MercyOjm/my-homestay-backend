import Property from '../models/property.model.js';
  
export const createProperty = async (req, res, next) => {
    const propertyData = req.body;
    try {
   
  
      // Create a new property object using the Property model
      const property = new Property(propertyData);
  
      // Save the property to the database
      await property.save();
  
      res.status(201).json({ message: 'Property created successfully', property });
    } catch (error) {
      next(error);
    }
  }
  


export const getPropertyDetail = async (req, res, next) => {
    const propertyId = req.params.id
    try {
      const property = await Property.findById(propertyId)
        // .populate('images', '-_id') 
        // .populate('host', 'email')
        // .populate('address', 'street city') 
        // .populate('reviews', '-_id') 
        // .select('-booked_dates'); 
  
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
  
      res.status(200).json(property);
    } catch (error) {
      next(error)
    }
  };
  
export const deleteProperty = async (req, res, next) => {
    const propertyId = req.params.id
    try {
      const deletedProp = await Property.findByIdAndDelete(propertyId)
        
      if (!deletedProp) {
        return res.status(404).json({ error: 'Property not found' });
      }
  
      res.status(200).json({message: 'Property deleted.', deletedProp});
    } catch (error) {
      next(error)
    }
  };
