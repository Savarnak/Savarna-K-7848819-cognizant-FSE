import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class WeatherServiceTest {

    @Test
    public void testFetchWeather() {

        // Create Mock Object
        WeatherApi mockApi = mock(WeatherApi.class);

        // Stub Method
        when(mockApi.getWeather()).thenReturn("Sunny");

        // Inject Mock
        WeatherService service = new WeatherService(mockApi);

        // Execute
        String result = service.fetchWeather();

        // Verify
        assertEquals("Sunny", result);
    }
}