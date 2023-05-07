# API Endpoints

## Login Routes

### login route `/api/login`

#### Request `POST`

```
{
  "email": "mohamed.raafat@eng.suez.edu.eg",
  "password": "123456" 
}
```

#### Responses

```
200 ok for successful login
401 Incorrect email or password         for invalid credentials
401 Missing credentials                 for missing email or password
```

### Forgot password route `api/forgot_password`

#### Request `POST`

```
{
  "email": "mohamed.raafat@eng.suez.edu.eg"
}
```

#### Responses

```
200 Reset link sent     if the user exist in the database
400 user not found      if the user doesn't exist
```

### Reset password route `api/reset_password/:token`

#### Request `POST`

```
{
  "password": "123456",
  "confpassword": "123456"
}
```

#### Responses

```
401 token is requred       if the token is not provided in the url
401 password and confirm password must match
498 Invalid token           if the token is altered
200 Password updated        if all is good
```

---
