// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the phone number from the user
const phoneNumber = '' // Replace with user input

// Start the phone number sign-in process
firebase.auth().signInWithPhoneNumber(phoneNumber)
  .then((confirmationResult) => {
    // User has entered their phone number, now send the verification code
    const code = prompt('Enter the verification code sent to your phone');
    confirmationResult.confirm(code)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in:", error);
      });
  })
  .catch((error) => {
    // Handle errors
    console.error("Error sending verification code:", error);
  });

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,16}$/;
  
    if (!passwordRegex.test(password)) {
      alert("Password must be 8-16 characters, include at least 1 uppercase letter, and have no spaces.");
      return;
    }
  
    alert("Signup successful!");
  });
  