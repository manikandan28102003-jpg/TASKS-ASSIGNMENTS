async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);

    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    // Optional: rethrow or return fallback value
    // throw error;
  }
}

// Example usage:
fetchData("https://api.example.com/data");
