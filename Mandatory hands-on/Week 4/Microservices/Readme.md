# Creating Microservices for Account and Loan

## Objective

Develop two independent Spring Boot microservices for handling Account and Loan information using REST APIs.

## What I Learned

- Created independent Spring Boot microservices.
- Implemented REST APIs using `@RestController` and `@GetMapping`.
- Used `@PathVariable` to retrieve request parameters.
- Configured different server ports for multiple services.
- Tested microservices independently using a web browser.

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Maven

## Endpoints

### Account Service

GET `/accounts/{number}`

Returns dummy account details.

### Loan Service

GET `/loans/{number}`

Returns dummy loan details.

## Outcome

Successfully created and executed two independent microservices running simultaneously on different ports (8080 and 8081), demonstrating the basic architecture of microservices.