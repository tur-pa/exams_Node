
# Ad border Node App

Project allows you to manage online ads by ads board.

Each ad has:

- id by default
- title (required)
- description
- author (required)
- category (required)
- tags (one or more)
- cost (required)
- currency (required)
- phoneNuber (required)
- time of creation by default


## Using the application 

First of all you have connect with DB by using `.env` file.

Next, you have to add some users to DB using POST method in endpoint `/api/users` or you can upload a pre-prepared collection in file `userDB.json`. In last case collection should be called `users`.
In this app there is set up limit of users to three. It could be changed in `userController.js`.

Ads could be added in `/api/` endpoint. Rest of endspoint are stored in `boardRoute`. You can upload a pre-prepared collection in file `advertsDB.json`. The collection should be called `adverts`.

## Utils

- `Requests.postman_collection` file could be imported to postman for request examples
- using `/heartbeat` the application responds with the current date and time
- `formatData` middleware allows to get data with correct format
- `checkUser` middleware check if there is registered user which is allowed to add ads
- `logdata` middleware allows to save in a text file the time of receiving each request, the HTTP method and the address to which the request came
- `catch404` middleware allows to catch "not found" errors
- deleting and modifying ads is password protected

## Run server

Running server could be done in two ways

- first way without debugging:
```bash
nodemon server.js --port=EnterPortNumber
```
- seond way with debugging
```bash
nodemon server.js --port=EnterPortNumber debug
```