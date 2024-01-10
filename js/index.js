document.addEventListener("DOMContentLoaded", function () {
  const githubForm = document.getElementById("github-form");
  const githubContainer = document.getElementById("github-container");
  let search = document.getElementById("search").value;
  const userList = document.getElementById("user-list");
  let reposList = document.getElementById("repos-list");

  let originalName = search.split(" ").join("");
  const showRepo = document.createElement("button");
  showRepo.innerHTML = `Show Repositories`;

  document.getElementById("repos-list").appendChild(showRepo);

  showRepo.addEventListener("click", function () {
    // Handle the click event, e.g., fetch and display repositories
    fetch(`https://api.github.com/users/${originalName}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos);

        // Clear previous results
        reposList.innerHTML = "";

        // Create an ordered list to display repositories
        const repositoriesList = document.createElement("ol");

        // Iterate through each repository and display its name
        repos.forEach((repo) => {
          console.log(repo.name);

          const repoItem = document.createElement("li");
          repoItem.textContent = repo.name;

          repositoriesList.appendChild(repoItem);
        });

        // Append the list of repositories to the reposList container
        reposList.appendChild(repositoriesList);
      });
  });

  githubForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the value from the search input

    // Clear previous results
    userList.innerHTML = "";

    fetch("https://api.github.com/users/" + originalName)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // githubContainer.innerHTML = `<a href="https://www.github.com/${originalName}"><img src="${data.avatar_url}" alt="GitHub Avatar" /></a>`;

        const usernameList = document.createElement("li");
        const username = document.createElement("h2");
        const avatarImage = document.createElement("img");
        //const showRepo = document.createElement("button");

        // Style for the username
        username.style.fontFamily = "Arial, sans-serif";
        username.style.fontSize = "18px";
        username.style.marginBottom = "5px";
        // Style for the avatar image
        avatarImage.style.width = "50px"; // Adjust the width as needed
        avatarImage.style.height = "50px"; // Adjust the height as needed
        avatarImage.style.borderRadius = "50%";
        // Add CSS classes to elements
        username.innerHTML = data.login;
        avatarImage.src = data.avatar_url;
        avatarImage.alt = "GitHub Avatar";

        // // Create a link for the GitHub user's profile
        // const userLink = document.createElement("a");
        // userLink.textContent = `
        // <a https://www.github.com/${originalName}></a>
        // `;
        // Set the link's attributes
        // userLink.href = `https://www.github.com/${originalName}`;
        // userLink.textContent = originalName; // Include the username as the link text
        // userLink.target = "_blank"; // Open the link in a new tab

        // // Append the user link to the user list
        // userList.appendChild(userLink);

        // Add a class to the button
        //showRepo.classList.add("custom-button");
        // Set the button text
        //showRepo.textContent = "Show Repositories";
        //showRepo.innerHTML = `
        // <button>show Repo${data.repository_url}</button>
        //`;

        usernameList.appendChild(username);
        usernameList.appendChild(avatarImage);
        //usernameList.appendChild(userLink);
        // usernameList.appendChild(showRepo);

        userList.appendChild(usernameList);
        //githubContainer.appendChild(userList);
      });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const githubForm = document.getElementById("github-form");
//   const githubContainer = document.getElementById("github-container");
//   const userList = document.getElementById("user-list");
//   const reposList = document.getElementById("repos-list");

//   githubForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     // Get the value from the search input
//     const search = document.getElementById("search").value;
//     const originalName = search.split(" ").join("");

//     // Clear previous results
//     userList.innerHTML = "";
//     reposList.innerHTML = "";

//     fetch("https://api.github.com/users/" + originalName)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);

//         const usernameList = document.createElement("li");
//         const username = document.createElement("h2");
//         const avatarImage = document.createElement("img");

//         // Style for the username
//         username.style.fontFamily = "Arial, sans-serif";
//         username.style.fontSize = "18px";
//         username.style.marginBottom = "5px";

//         // Style for the avatar image
//         avatarImage.style.width = "50px"; // Adjust the width as needed
//         avatarImage.style.height = "50px"; // Adjust the height as needed
//         avatarImage.style.borderRadius = "50%";

//         username.innerHTML = data.login;
//         avatarImage.src = data.avatar_url;
//         avatarImage.alt = "GitHub Avatar";

//         usernameList.appendChild(username);
//         usernameList.appendChild(avatarImage);

//         userList.appendChild(usernameList);
//         githubContainer.appendChild(userList);

//         const showRepo = document.createElement("button");
//         showRepo.innerHTML = `Show Repositories`;

//         showRepo.style.overflow = "none";
//         showRepo.style.whiteSpace = "nowrap";
//         githubContainer.appendChild(showRepo);

//         showRepo.addEventListener("click", function () {
//           // Handle the click event, e.g., fetch and display repositories
//           fetch(`https://api.github.com/users/${originalName}/repos`)
//             .then((res) => res.json())
//             .then((repos) => {
//               console.log(repos);

//               reposList.innerHTML = ""; // Clear previous results
//               const repositoriesList = document.createElement("ol");
//               const repositoriesParagraph = document.createElement("p");
//               repositoriesParagraph.textContent = "Repositories: ";

//               repos.forEach((repo, index) => {
//                 const repoItem = document.createElement("span");
//                 repoItem.textContent = repo.name;

//                 repositoriesParagraph.appendChild(repoItem);

//                 if (index < repos.length - 1) {
//                   repositoriesParagraph.innerHTML += ", ";
//                 }
//               });

//               reposList.appendChild(repositoriesList);
//               reposList.appendChild(repositoriesParagraph);
//             });
//         });
//       });
//   });
// });
