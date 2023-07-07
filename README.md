
```




    
## Tech Stack




- MongoDB (with Mongoose)
- Express.js
- dotenv
- cors



## Deployment


To start server run

```bash
  npm run start

```







## Environment Variables 



- Make sure you have MongoDB installed and running on your local machine or provide the appropriate MongoDB connection URL.

- Open the .env file in the project root directory and modify following :

    `PORT`

    `MONGODB_URL`


## Codebase Structure

- `server.js` : Entry point of the project.

- `app.js`  : Initializes the Express server and sets up routes.

- `confiq` : Contains information and logic how to connect database.

- `controllers` : Contains all the logic of features  of the project.

- `models` : Contains logic related to database desgin.

- `routes` : Contains logic related to the routing of the server.

- `middleware` : Contains middleware functions for validation and error handling.


## API Documentation

- User Registration

EndPoint: `/register`

Method: POST

Request Body
```bash
 {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

```

Response 
```bash
 User registered successfully

```

- User login

EndPoint: `/login`

Method: POST

Request Body
```bash
 { 
  "email": "johndoe@example.com",
  "password": "password123"
  }

```

Response 
```bash
 User login successfully

```



## License

This project is licensed under the
[MIT](https://choosealicense.com/licenses/mit/).


## Contributing

Contributions are always welcome!

Pull requests and suggestions for improvements are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Feedback

If you have any feedback, please reach out to us at ianshushree@gmail.com

# user_management
