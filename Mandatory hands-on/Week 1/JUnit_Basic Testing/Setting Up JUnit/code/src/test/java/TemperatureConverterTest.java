import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TemperatureConverterTest {

    @Test
    public void testCelsiusToFahrenheit() {

        TemperatureConverter converter = new TemperatureConverter();

        double result = converter.celsiusToFahrenheit(25);

        assertEquals(77.0, result, 0.01);
    }
}