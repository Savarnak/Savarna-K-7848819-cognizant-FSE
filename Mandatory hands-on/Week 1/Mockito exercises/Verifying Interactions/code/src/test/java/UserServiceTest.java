import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        NotificationService mockService = mock(NotificationService.class);

        // Create Service
        UserService userService = new UserService(mockService);

        // Call Method
        userService.registerUser("Savarna");

        // Verify Interaction
        verify(mockService).sendNotification("Welcome Savarna");
    }
}