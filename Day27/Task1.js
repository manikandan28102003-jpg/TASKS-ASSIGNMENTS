fetch("https://api.github.com/users/https://github.com/")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("GitHub Profile Data:", data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
