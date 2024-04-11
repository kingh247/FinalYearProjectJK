import { use } from 'bcrypt/promises';
import { request } from 'express';
import { get } from 'mongoose';

// Swagger options
const swaggerOptions = {
  openapi: '3.1.0',
  info: {
    title: 'Eccomere B2B project',
    version: '2.0',
    description: 'API documentation generated with Swagger',
    contact: {
      name: 'John kingh',
    },
  },
  servers: [{ url: 'http://localhost:5000', description: 'Production Dev' }],
  tags: [
    {
      name: 'user',
      description: 'User related end points',
    },
  ],
  paths: {
    '/api/users': {
      get: {
        tags: ['user'],

        summary: 'Get all users',
        description: 'Get all users from the database',
        responses: {
          200: {
            description: 'A list of users',
          },
          404: {
            description: 'No users found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
   
  },
  paths:{
    
  }
};

export default swaggerOptions;
