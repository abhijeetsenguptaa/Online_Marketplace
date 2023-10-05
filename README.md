### Online Marketplace API Documentation

This documentation outlines the API endpoints and functionalities for the Online Marketplace backend system.


#### Authentication

- All routes, except for user registration and login, require authentication via JSON Web Tokens (JWT).

---

#### User Routes

##### Register a User

- **URL**: `/users/register`
- **Method**: `POST`
- **Description**: Register a new user.
- **Request Body**:
  - `name` (string): User's name.
  - `email` (string): User's email.
  - `password` (string): User's password.
  - `address` (string): User's address.
  - `phoneNumber` (string): User's phone number.
- **Response**:
  - `message` (string): "User registered successfully."
  - `user` (object): Newly registered user details.
- **Errors**:
  - 400 Bad Request: Invalid request data.
  - 409 Conflict: User with the same email already exists.

##### User Login

- **URL**: `/users/login`
- **Method**: `POST`
- **Description**: Authenticate a user and receive a JWT token.
- **Request Body**:
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Response**:
  - `message` (string): "Login successful."
  - `token` (string): JWT token for authentication.
- **Errors**:
  - 401 Unauthorized: Invalid credentials.

##### Get User Profile

- **URL**: `/users/profile`
- **Method**: `GET`
- **Description**: Retrieve the user's profile information.
- **Authentication**: Required (JWT token).
- **Response**:
  - `user` (object): User profile details.

##### Update User Profile

- **URL**: `/users/profile`
- **Method**: `PUT`
- **Description**: Update the user's profile information.
- **Authentication**: Required (JWT token).
- **Request Body**: (any fields to be updated)
- **Response**:
  - `message` (string): "Profile updated successfully."

---

#### Listing Routes

##### Create a Listing

- **URL**: `/listings`
- **Method**: `POST`
- **Description**: Create a new product listing.
- **Authentication**: Required (JWT token).
- **Request Body**:
  - `title` (string): Title of the listing.
  - `description` (string): Description of the listing.
  - `price` (number): Price of the product.
  - `category` (string): Category of the product.
- **Response**:
  - `message` (string): "Listing created successfully."
  - `listing` (object): Newly created listing details.

##### Get All Listings

- **URL**: `/listings`
- **Method**: `GET`
- **Description**: Retrieve a list of all available product listings.
- **Response**:
  - `listings` (array): List of product listings.

##### Get Listing by ID

- **URL**: `/listings/:listingId`
- **Method**: `GET`
- **Description**: Retrieve details of a specific product listing by ID.
- **Response**:
  - `listing` (object): Listing details.

##### Update Listing by ID

- **URL**: `/listings/:listingId`
- **Method**: `PUT`
- **Description**: Update a product listing by ID.
- **Authentication**: Required (JWT token).
- **Request Body**: (any fields to be updated)
- **Response**:
  - `message` (string): "Listing updated successfully."

##### Delete Listing by ID

- **URL**: `/listings/:listingId`
- **Method**: `DELETE`
- **Description**: Delete a product listing by ID.
- **Authentication**: Required (JWT token).
- **Response**:
  - `message` (string): "Listing deleted successfully."

---

#### Product Routes

##### Get Product by ID

- **URL**: `/products/:productId`
- **Method**: `GET`
- **Description**: Retrieve details of a specific product by ID.
- **Response**:
  - `product` (object): Product details.

---

#### Cart Routes

##### Add Product to Cart

- **URL**: `/cart/add/:productId`
- **Method**: `POST`
- **Description**: Add a product to the user's shopping cart.
- **Authentication**: Required (JWT token).
- **Response**:
  - `message` (string): "Product added to cart successfully."

##### Get User's Cart

- **URL**: `/cart`
- **Method**: `GET`
- **Description**: Retrieve the user's shopping cart contents.
- **Authentication**: Required (JWT token).
- **Response**:
  - `cart` (array): List of products in the cart.

##### Remove Product from Cart

- **URL**: `/cart/remove/:productId`
- **Method**: `DELETE`
- **Description**: Remove a product from the user's shopping cart.
- **Authentication**: Required (JWT token).
- **Response**:
  - `message` (string): "Product removed from cart successfully."

---

#### Order Routes

##### Place an Order

- **URL**: `/orders/place`
- **Method**: `POST`
- **Description**: Place an order for the products in the user's cart.
- **Authentication**: Required (JWT token).
- **Request Body**:
  - `shippingAddress` (string): Shipping address for the order.
  - `paymentMethod` (string): Payment method for the order.
- **Response**:
  - `message` (string): "Order placed successfully."
  - `order` (object): Order details, including total amount and order status.

##### Get User's Orders

- **URL**: `/orders`
- **Method**: `GET`
- **Description**: Retrieve a list of all orders placed by the user.
- **Authentication**: Required (JWT token).
- **Response**:
  - `orders` (array): List of user's orders.

---

### Error Handling

- The API returns appropriate error codes and messages for invalid requests.
- Error responses include a `message` field with a description of the error.

---

