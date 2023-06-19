import Property from "../models/property.model.js";



/* -------------------------------------------------------------------------- */
/*                              Get property details by ID                             */
/* -------------------------------------------------------------------------- */

export const getPropertyById = async(req, res, next) => {
    const propertyId = req.params.id;
    try {
        const property = await Property.findById(propertyId)
        .populate('images', '-_id')
        populate('host', 'email') 
        .populate('address', 'street city') 
        .populate('reviews', '-_id') 
        .select('-booked_dates'); 
        
        
        if(!property){
            return res.status(404).json({message: "Property not found"})
        }

        res.json(property)
        
    } catch (error) {
        next(error)
    }

}


/* -------------------------------------------------------------------------- */
/*                              Deleting property                             */
/* -------------------------------------------------------------------------- */

export const deleteProperty = async(req, res, next) => {
    try {
        const propertyId = req.params.id;
        //if property exists
        const property = await Property.findById(propertyId);
        if(!property){
            return res.status(404).json({message: 'Property not found'});
        }
        //if the logged-in user is the owner 
        if(property.owner.toString() !== req.user._id.toString()){
            return res.status(403).json({message: 'You are not authorized to delete the property.'})
        }
        await property.remove();
        res.status(200).json({message: 'Property deleted successfully'})
    } catch (error) {
        next(error)
    }
}