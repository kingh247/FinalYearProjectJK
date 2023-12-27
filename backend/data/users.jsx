import bcypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john kingh',
    email: 'johnkingh@email.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'mark kingh',
    email: 'admin@email.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: false,
  },
];
export default users;
