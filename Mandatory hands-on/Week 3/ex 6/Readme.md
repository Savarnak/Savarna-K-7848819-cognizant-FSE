# Hands-on: Create Authentication Service that Returns JWT

## Objective

Implement a RESTful authentication service that validates user credentials using Spring Security and generates a JSON Web Token (JWT) for authenticated users.

## What I Learned

- Configured Spring Security with in-memory user authentication.
- Implemented HTTP Basic Authentication.
- Read and decoded the Authorization header using Base64.
- Extracted the authenticated username from the request.
- Generated JWT tokens using the JJWT library.
- Returned the generated JWT as a JSON response from a REST endpoint.
- Tested secured REST APIs using both a browser and Postman.

## Technologies Used

- Java
- Spring Boot
- Spring Security
- Spring Web
- JJWT
- Maven

## Endpoint

**Method:** GET

**URL:** `/authenticate`

### Sample Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}