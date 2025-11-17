async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`User not found: ${res.status}`);
    }

    const data = await res.json();
    console.log("User:", data);
  } catch (err) {
    console.error("Caught error:", err.message);
  }
}

getUser(99999); // <-- Non-existing user, triggers catch
