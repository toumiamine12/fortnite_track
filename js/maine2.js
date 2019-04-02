document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();
  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlB23-cjKqqHDStWdwq5SVatUnTr7JUkM",
  authDomain: "fortnite-track.firebaseapp.com",
  databaseURL: "https://fortnite-track.firebaseio.com",
  projectId: "fortnite-track",
  storageBucket: "fortnite-track.appspot.com",
  messagingSenderId: "1071210334148"
};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref('messages');