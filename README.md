# gebarentaal-game-backend

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

## Endpoints V1

| HTTP method | endpoint    |       required headers        |   content-type   |      accept      |        GET parameters        |        body        |           response            |
|:-----------:|:------------|:-----------------------------:|:----------------:|:----------------:|:----------------------------:|:------------------:|:-----------------------------:|
|    POST     | login/      |                               | application/json | application/json |                              | name, token, email |             token             |
|     GET     | characters/ | Authorization: Bearer <token> |                  | application/json | type={numeric or alphabetic} |                    | is_numeric, value, image_path | 