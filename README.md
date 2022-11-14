Install dependencies:

```
npm i
```

Install openssl and run:

```
openssl genrsa -des3 -out private.pem 2048
```

Export the key pair:

```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```

Execute the scripts in MySQL database in the following order:

1. @create_schema.sql
2. @create_user.sql
3. @seed_data.sql
