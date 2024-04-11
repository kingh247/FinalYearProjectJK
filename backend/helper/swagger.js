//  /**
//  * @swagger
//  * /api/product:
//  *   post:
//  *     summary: Create new product
//  *     description: Create new product with provided details.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               MyName:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Product created successfully.
//  *       400:
//  *         description: Bad request, missing required fields or product with the same name already exists.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/product:
//  *   get:
//  *     summary: Retrieve all products
//  *     description: Retrieve a list of all products.
//  *     responses:
//  *       200:
//  *         description: A list of products.
//  *       404:
//  *         description: No products found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/product:
//  *   delete:
//  *     summary: Delete product by ID
//  *     description: Delete product data by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the product to delete.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Product data deleted successfully.
//  *       404:
//  *         description: Product not found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/product:
//  *   put:
//  *     summary: Update product by ID
//  *     description: Update product data by its ID with provided details.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the product to update.
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               MyName:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Product updated successfully.
//  *       404:
//  *         description: Product not found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/product/{id}:
//  *   get:
//  *     summary: Retrieve a product by ID
//  *     description: Retrieve a single product by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the product to retrieve.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: The requested product.
//  *       404:
//  *         description: Product not found.
//  *       500:
//  *         description: Internal server error.
//  */

// app.use('/api/product', productRoute);

// /**
//  * @swagger
//  * /api/users:
//  *   name: Products
//  *   get:
//  *     summary: Retrieve all users
//  *     description: Retrieve a list of all users.
//  *     responses:
//  *       200:
//  *         description: A list of users.
//  *       404:
//  *         description: No users found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/users:
//  *   name: Products
//  *   delete:
//  *     summary: Delete user by ID
//  *     description: Delete user data by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the user to delete.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: User data deleted successfully.
//  *       404:
//  *         description: User not found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/users/{id}:
//  *   get:
//  *     summary: Retrieve a users by ID
//  *     description: Retrieve a single users by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the users to retrieve.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: The requested users.
//  *       404:
//  *         description: users not found.
//  */
// /**
//  * @swagger
//  * /api/users/{id}:
//  *   get:
//  *     summary: Retrieve a users by ID
//  *     description: Retrieve a single users by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the users to retrieve.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: The requested users.
//  *       404:
//  *         description: users not found.
//  */
// /**
//  * @swagger
//  * /api/users/{id}:
//  *   post:
//  *     summary: Create new user
//  *     description: Create new user with provided details.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User created successfully.
//  *       400:
//  *         description: Bad request, missing required fields.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/users/{id}:
//  *   put:
//  *     summary: Update user by ID
//  *     description: Update user data by its ID with provided details.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the user to update.
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User updated successfully.
//  *       404:
//  *         description: User not found.
//  *       500:
//  *         description: Internal server error.
//  */
// app.use('/api/users', userRoute);

// /**
//  * @swagger
//  * /api/shipping:
//  *   name: Shipping
//  *   get:
//  *     summary: Retrieve all shipping details
//  *     description: Retrieve a list of all shipping details.
//  *     responses:
//  *       200:
//  *         description: A list of shipping details.
//  */
// /**
//  * /**
//  * @swagger
//  * /api/shipping:
//  *   name: Shipping
//  *   post:
//  *     summary: Create new shipping data
//  *     description: Create new shipping data with provided details.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               fullName:
//  *                 type: string
//  *               addressLine1:
//  *                 type: string
//  *               addressLine2:
//  *                 type: string
//  *               postalCode:
//  *                 type: string
//  *               city:
//  *                 type: string
//  *               country:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Shipping data created successfully.
//  *       400:
//  *         description: Bad request, missing required fields.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * /**
//  * @swagger
//  * /api/shipping/{id}:
//  *   name: Shipping
//  *   get:
//  *     summary: Get shipping data by ID
//  *     description: Retrieve shipping data by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the shipping data to retrieve.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Shipping data retrieved successfully.
//  *       404:
//  *         description: Shipping data not found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * /**
//  * @swagger
//  * /api/shipping:
//  *   name: Shipping
//  *   put:
//  *     summary: Update shipping data by ID
//  *     description: Update shipping data by its ID with provided details.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the shipping data to update.
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               fullName:
//  *                 type: string
//  *               addressLine1:
//  *                 type: string
//  *               addressLine2:
//  *                 type: string
//  *               postalCode:
//  *                 type: string
//  *               city:
//  *                 type: string
//  *               country:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Shipping data updated successfully.
//  *       404:
//  *         description: Shipping data not found.
//  *       500:
//  *         description: Internal server error.
//  *   delete:
//  *     summary: Delete shipping data by ID
//  *     description: Delete shipping data by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the shipping data to delete.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Shipping data deleted successfully.
//  *       404:
//  *         description: Shipping data not found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/shipping:
//  *   name: Shipping
//  *   delete:
//  *     summary: Delete shipping data by ID
//  *     description: Delete shipping data by its ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the shipping data to delete.
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Shipping data deleted successfully.
//  *       404:
//  *         description: Shipping data not found.
//  *       500:
//  *         description: Internal server error.
//  */
// app.use('/api/shipping', shippingRoute);

// /**
//  * @swagger
//  * /api/products:
//  *   name: Products
//  *   get:
//  *     summary: Retrieve all products
//  *     description: Retrieve a list of all products.
//  *     responses:
//  *       200:
//  *         description: A list of products.
//  */

// app.use('/api/products', productsRoute);
// /**
//  * @swagger
//  * /api/order:
//  *   name: Order
//  *   get:
//  *     summary: Retrieve all orders
//  *     description: Retrieve a list of all orders.
//  *     responses:
//  *       200:
//  *         description: A list of orders.
//  */

// app.use('/api/order', orderRoute);
// /**
//  * @swagger
//  * /api/signup:
//  *   name: Signup
//  *   get:
//  *     summary: Retrieve all signups
//  *     description: Retrieve a list of all signups.
//  responses:
//  *       200:
//  *         description: A list of signups.
//  *       404:
//  *         description: No signups found.
//  *       500:
//  *         description: Internal server error.
//  */
// /**
//  * @swagger
//  * /api/signup:
//  *   post:
//  *     summary: Signup user
//  *     description: Register a new user with username, email, password, and user type.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *               userType:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Signup successful.
//  *       400:
//  *         description: Bad request, missing required fields or username/email already in use.
//  *       500:
//  *         description: Internal server error.
//  */

// app.use('/api/signup', signUpRoute);

// /**
//  * @swagger
//  * /api/login:
//  *   name: Login
//  *   get:
//  *     summary: Retrieve all logins
//  *     description: Retrieve a list of all logins.
//  *     responses:
//  *       200:
//  *         description: A list of logins.
//  *       404:
//  *         description: No signups found.
//  *       500:
//  *         description: Internal server error.
//  */

// /**
//  * @swagger
//  * /api/login:
//  *   post:
//  *     summary: Login user
//  *     description: Authenticate a user and generate JWT token.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User authenticated successfully.
//  *       401:
//  *         description: Invalid credentials.
//  *       500:
//  *         description: Internal Server Error.
//  */

// app.use('/api/login', loginRoute);
