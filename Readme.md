## 1. Create Database

```shell
username@localhost:~/tienda-de-joyas-server$ cd config/db
username@localhost:~/tienda-de-joyas-server/db$ psql < schema.sql username
```

## 2. Configure Environment

1. Copy `.env.example` to `.env`
2. Set the variables values in `.env` file

## 3. Run API

```shell
username@localhost:~/tienda-de-joyas-server$ npm run dev
```
