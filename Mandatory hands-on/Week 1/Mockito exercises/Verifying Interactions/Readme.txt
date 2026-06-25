EXERCISE 2 - VERIFYING INTERACTIONS

Objective:
To verify that a mocked object's method is called with the expected argument.

Files:
1. NotificationService.java
2. UserService.java
3. UserServiceTest.java

Concepts Used:
- Mockito Mock
- verify()
- Interaction Testing

Workflow:
1. Create a mock NotificationService.
2. Pass the mock to UserService.
3. Call registerUser().
4. Verify that sendNotification() was invoked with the expected message.

Result:
The interaction between UserService and NotificationService was verified successfully.