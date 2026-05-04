// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch users data
function fetchUsers() {
  fetch(API_URL)
    .then(response => response.json()) // convert to JSON
    .then(data => {
      console.log(data); // log response
      displayUsers(data);
    })
    .catch(error => console.error("Error:", error));
}

// Display users in UI
function displayUsers(users) {
  const container = document.getElementById("userContainer");
  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;

    container.appendChild(card);
  });
}

// Call function
fetchUsers();