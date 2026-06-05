function expo(num, power, cb) {
  if (power === 0) {
    return cb(1);
  }

  return num * expo(num, power - 1, cb);
}

const result = expo(5, 3, (x) => x);

console.log(result); 

// 2

const postsContainer = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const postElement = document.createElement("div");

      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
      `;

      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//3
async function deepCopyObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("აქ უნდა იყოსობიექტი");
  }

  return structuredClone(obj);
}

deepCopyObject({
  name: "Ani",
  age: 20,
})
  .then((copy) => console.log(copy))
  .catch((error) => console.log(error.message));


