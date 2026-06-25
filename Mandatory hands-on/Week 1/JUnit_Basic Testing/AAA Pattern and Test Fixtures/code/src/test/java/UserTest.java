import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserTest {

    private User user;

    @Before
    public void setUp() {
        System.out.println("Setup: Creating User Object");
        user = new User("Savarna");
    }

    @Test
    public void testUserName() {

        // Arrange
        String expectedName = "Savarna";

        // Act
        String actualName = user.getName();

        // Assert
        assertEquals(expectedName, actualName);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown: Cleaning Resources");
        user = null;
    }
}