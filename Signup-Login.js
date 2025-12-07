function signup(userName) {
  let users = ["Pravallika", "John", "Meena", "Raj"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("Pravallika"));
console.log(signup("NewUser"));


function login(userName, password) {
  let users = ["Pravallika", "John", "Meena", "Raj"];
  
  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== "Emp@123") {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}

console.log(login("Pravallika", "Emp@123"));
console.log(login("NewUser", "Emp@123"));   
console.log(login("John", "wrongpass"));    
