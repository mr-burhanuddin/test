# User Registration API Contract

## Introduction
The User Registration API is designed to facilitate the registration of new users on the website. This API allows users to create an account by providing necessary information such as their name, email address, and password. The API ensures that the registration process is secure, validates user input, and provides appropriate feedback for both successful and unsuccessful registration attempts. This documentation outlines the endpoints, request/response formats, and error handling mechanisms for the User Registration API.

---

## API Endpoints

### 1. User Registration Endpoint

**Endpoint:**  
`POST [base_url]/api/register`

**Content Type:**  
The service should be posted (POST) with the following information:

#### HEADERS

| Key-Value                                 |
|-------------------------------------------|
| Content-Type   | application/json        |
| Accept         | application/json        |

#### Request

| Method  | POST                            |
|---------|---------------------------------|
| URL     | [base_url]/api/register        |

#### JSON - PAYLOAD

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "password": "Password123!",
    "confirmPassword": "Password123!"
}
```

---

### RESPONSE - SUCCESS

```json
{
    "statusCode": 201,
    "message": "Registration successful! Please check your email to verify your account.",
    "userId": "unique_user_id_here"
}
```

---

### RESPONSE - EMAIL VALIDATION ERROR

```json
{
    "statusCode": 400,
    "message": "Please enter a valid email address."
}
```

---

### RESPONSE - PASSWORD REQUIREMENTS ERROR

```json
{
    "statusCode": 400,
    "message": "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
}
```

---

### RESPONSE - PASSWORD MISMATCH ERROR

```json
{
    "statusCode": 400,
    "message": "Passwords do not match."
}
```

---

### RESPONSE - EMAIL ALREADY REGISTERED ERROR

```json
{
    "statusCode": 409,
    "message": "This email address is already registered."
}
```

---

### RESPONSE - SERVER ERROR

```json
{
    "statusCode": 500,
    "message": "An error occurred. Please try again later."
}
```

---

### 2. Email Verification Endpoint

**Endpoint:**  
`GET [base_url]/api/verify-email`

**Content Type:**  
The service should be accessed (GET) with the following information:

#### HEADERS

| Key-Value                                 |
|-------------------------------------------|
| Accept         | application/json        |

#### Request

| Method  | GET                             |
|---------|---------------------------------|
| URL     | [base_url]/api/verify-email?token=verification_token |

#### RESPONSE - SUCCESS

```json
{
    "statusCode": 200,
    "message": "Email verified successfully! You can now log in."
}
```

---

### RESPONSE - INVALID TOKEN ERROR

```json
{
    "statusCode": 400,
    "message": "Invalid verification token."
}
```

---

### RESPONSE - TOKEN EXPIRED ERROR

```json
{
    "statusCode": 400,
    "message": "Verification token has expired."
}
```

---

## Additional Notes
- The API must comply with data protection regulations (e.g., GDPR).
- All responses should be in JSON format.
- The API should handle errors gracefully and provide meaningful messages to the user.
- The design should be responsive and work on both desktop and mobile devices.
- Ensure that the registration process includes proper logging for security and auditing purposes.

This API contract provides a comprehensive overview of the User Registration API, detailing the endpoints, request/response formats, and error handling mechanisms necessary for successful user registration and email verification.