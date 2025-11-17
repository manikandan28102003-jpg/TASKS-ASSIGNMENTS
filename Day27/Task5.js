fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.slice(0, 5).forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => console.error("Error fetching posts:", error));


  async function showFirstFiveTitles() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    posts.slice(0, 5).forEach(p => console.log(p.title));
  } catch (err) {
    console.error("Error:", err);
  }
}

showFirstFiveTitles();
