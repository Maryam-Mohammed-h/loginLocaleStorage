var userEmailInput = document.querySelector("#email");
var userPasswordInput = document.querySelector("#password");
var userNameInput = document.querySelector("#username");

var registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  register();
});
var users = [];

function register() {
  var user = {
    userName: userNameInput.value,
    userEmail: userEmailInput.value,
    userPassword: userPasswordInput.value,
    loggedIn: false,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  clearForm();
}

function clearForm() {
  userEmailInput.value = "";
  userNameInput.value = "";
  userPasswordInput.value = "";
}
