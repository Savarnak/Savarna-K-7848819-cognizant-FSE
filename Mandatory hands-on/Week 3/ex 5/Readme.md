# Hands-on 5: REST - Get Country Based on Country Code

## Objective

Develop a RESTful web service that returns country details based on the country code provided in the URL.

## What I Learned

- Implemented REST endpoints using `@GetMapping`.
- Used `@PathVariable` to retrieve values from the request URL.
- Created a service layer to separate business logic from the controller.
- Loaded and managed Spring beans using XML configuration.
- Performed case-insensitive searches using Java.
- Returned Java objects as JSON responses automatically using Spring Boot.

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Spring Core
- Maven

## Endpoint

**Method:** GET

**URL:**

```
/country/{code}
```

### Example

```
GET /country/in
```

### Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Outcome

Successfully implemented a REST API that retrieves country details based on the country code while supporting case-insensitive input. 