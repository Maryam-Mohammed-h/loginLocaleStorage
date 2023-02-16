var logoutBtn = document.querySelector("#logoutBtn");

var userNameHomePage = document.querySelector("#userNameHomePage");

logoutBtn.addEventListener("click", function () {
  logout();
});
var users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
var user = JSON.parse(localStorage.getItem("currentUser"));
if (user == null || user.loggedIn == false) {
  document.location.href = "index.html";
} else {
  userNameHomePage.innerHTML = user.userName;
}

var allUsers = JSON.parse(localStorage.getItem("users"));

function logout() {
  for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i].userEmail == user.userEmail) {
      allUsers[i].loggedIn = false;
    }
  }
  localStorage.setItem("users", JSON.stringify(allUsers));

  localStorage.removeItem("currentUser");
  document.location.href = "index.html";
}
