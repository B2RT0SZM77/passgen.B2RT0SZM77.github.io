function genPassword() {
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[];',./{}|:<>?\"'";
    let passstrength = 16;
    let password = "";
  
    for (let i = 0; i < passstrength; i++) {
      let random = Math.floor(Math.random() * chars.length);
  
      password += chars.substring(random, random + 1);
    }
    document.getElementById("fard").value = password;
  }