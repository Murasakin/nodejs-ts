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
