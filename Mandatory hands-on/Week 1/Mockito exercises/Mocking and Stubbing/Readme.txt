EXERCISE 1 - MOCKING AND STUBBING

Objective:
To test a service that depends on an external API using Mockito.

Files:
1. WeatherApi.java
2. WeatherService.java
3. WeatherServiceTest.java

Concepts Used:
- Mock Object
- Stubbing
- Unit Testing
- Mockito

Workflow:
1. Create a mock WeatherApi object.
2. Stub getWeather() to return "Sunny".
3. Inject the mock into WeatherService.
4. Verify the returned value using assertEquals().

Result:
The test passed successfully using Mockito mock and stub methods.