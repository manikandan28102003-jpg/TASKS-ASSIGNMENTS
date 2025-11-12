// Simulate fetching data with async/await
async function fetchData() {
  console.log("Fetching data...");

  // Simulate network delay using a Promise and setTimeout
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Mani", job: "WebDeveloper" });
    }, 2000); // 2-second delay
  });

  console.log("Data fetched:", data);
  return data;
}

// Run the async function
fetchData()
  .then((result) => console.log("Fetch complete:", result))
  .catch((error) => console.error("Error fetching data:", error));
