import express from 'express';
import { signin, signup } from '../controllers/user.controller.js';

import { signInValidation, userValidation } from '../validations/user.js';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/signup')
  .post(validator(userValidation), signup)

  router.route('/signin').post(signin);

router.route('/signin')
  .post(validator(signInValidation),  signin)



export default userRoutes;
