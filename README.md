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