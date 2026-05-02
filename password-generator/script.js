const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
function generatePassword() {

  let length = document.getElementById("length").value;

  if (length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("result").innerText = password;
}
function copyPassword() {

  let text = document.getElementById("result").innerText;

  navigator.clipboard.writeText(text);

  alert("Password copied!");
}