import express from 'express';
import router from 'express';

//constroller functions
import { signupUser, loginUser } from '../controller/userController';

//login https://www.youtube.com/watch?v=b5LDOW8WJ9A&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT&index=2
router.post('/login', loginUser);
//signin//
router.post('/signup', signupUser);

export default router;
