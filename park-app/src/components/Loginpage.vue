<script>
import { loginPage } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

function signInWithEmailPassword() {
  var email = 'test@example.com'
  var password = 'hunter2'
  // [START auth_signin_password]
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      // ...
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
    })
  // [END auth_signin_password]
}

function signUpWithEmailPassword() {
  var email = 'test@example.com'
  var password = 'hunter2'
  // [START auth_signup_password]
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      // ...
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      // ..
    })
  // [END auth_signup_password]
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    })
  // [END auth_send_email_verification]
}

function sendPasswordReset() {
  const email = 'sam@example.com'
  // [START auth_send_password_reset]
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      // ..
    })
  // [END auth_send_password_reset]
}
const app = loginPage({
  /* root component options */
})
</script>
