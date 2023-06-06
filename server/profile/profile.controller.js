const User = require('../user/user.model');


function getProfile(req, res, next, id) {
  User.get(id)
    .then((user) => {
      res.json(user); // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function updateProfile(req, res, next,id) {
    User.get(id)
    .then((user) => {
      user.dob=req.body.dob;
      
      user.save()
      .then(savedUser => res.json(savedUser))
      .catch(e => next(e));
        
    });
  }