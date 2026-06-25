import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        // Assert Equals
        assertEquals("Sum should be 15", 15, 10 + 5);

        // Assert True
        assertTrue("100 is greater than 50", 100 > 50);

        // Assert False
        assertFalse("20 is less than 10", 20 < 10);

        // Assert Null
        String value = null;
        assertNull(value);

        // Assert Not Null
        Object obj = new Object();
        assertNotNull(obj);
    }
}