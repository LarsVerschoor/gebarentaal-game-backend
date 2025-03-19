# gebarentaal-game-backend

## How to get access

1. Request an access key from the `/keys` endpoint. This endpoint will return a webpage on which you can request your key. Use `REQUEST_KEY_PASSWORD` from your `.env` file as password when requesting your key.


2. Use this key in the `x-access-key` header with every request.

## How to run:

1. Clone the repository
```bash
git clone https://github.com/LarsVerschoor/gebarentaal-game-backend.git
```

2. Navigate to the created directory
```bash
cd gebarentaal-game-backend
```

3. Install dependencies
```bash
npm install
```

4. Provide database configuration in .env file
```text
USERNAME_DEVELOPMENT=database_username
PASSWORD_DEVELOPMENT=database_password
DATABASE_DEVELOPMENT=database_name
HOST_DEVELOPMENT=database_host
DIALECT_DEVELOPMENT=mysql
```

5. Run migrations
```bash
npm run migrate:up
```

6. Generate JSON Web Token key pairs
```bash
npm run key:generate
```

7. Run project with dev for development or start for production
```bash
npm run dev
```
```bash
npm run start
```

## Database migrations:
Create a new table
```bash
npx sequelize-cli model:generate --name Table --attributes name:string,age:smallint
```

Migrate up
```bash
npm run migrate:up
```

Migrate undo
```bash
npm run migrate:undo
```

Migrate fresh
```bash
npm run migrate:fresh
```

## Endpoints V2

| HTTP method | endpoint     |       required headers        |   content-type   |      accept      |        GET parameters        |        body        |           response            |
|:-----------:|:-------------|:-----------------------------:|:----------------:|:----------------:|:----------------------------:|:------------------:|:-----------------------------:|
|    POST     | login/       |        x-access-token         | application/json | application/json |                              | name, token, email |             token             |
|     GET     | characters/  | Authorization, x-access-token |                  | application/json | type={numeric or alphabetic} |                    | is_numeric, value, image_path | 
|     GET     | scores/      | Authorization, x-access-token |                  | application/json |                              |                    |         recent scores         |
|    POST     | scores/      | Authorization, x-access-token | application/json | application/json |                              |    level, time     |          level, time          |
|     GET     | accounts/    | Authorization, x-access-token |                  | application/json |                              |                    |             users             |
|    POST     | accounts/    | Authorization, x-access-token | application/json | application/json |                              |    email, role     |             user              |
|   DELETE    | accounts/:id | Authorization, x-access-token |                  | application/json |              id              |                    |                               |
|    PATCH    | accounts/id  | Authorization, x-access-token | application/json | application/json |              id              |        role        |             user              |

## Load tests

Load test on /api/v2/characters
Performs 2 DB queries: on the users table and one the characters table.

On ubuntu server with 2GB RAM on an Intel(R) Xeon(R) Silver 4314 CPU @ 2.40GHz Processor
100 Requests per second ~10ms median response time with 100% 200 OK status codes
500 Requests per second ~1200ms median response time with 97.6% 200 OK status codes