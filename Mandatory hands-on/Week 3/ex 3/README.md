# Hands-on 3: Hello World RESTful Web Service

## Objective

Develop a simple RESTful web service using Spring Boot that returns "Hello World!!" through an HTTP GET request.

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Maven

## Implementation

- Created a REST controller using `@RestController`.
- Exposed a GET endpoint using `@GetMapping("/hello")`.
- Added logging at the start and end of the service method.
- Tested the endpoint using both Chrome Browser and Postman.

## Endpoint

**Method:** GET

**URL:**

```
http://localhost:8083/hello
```

## Response

```
Hello World!!
```

## Output

The application starts successfully and returns the expected response when the `/hello` endpoint is invoked.