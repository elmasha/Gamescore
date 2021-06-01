var db = firebase.firestore();








// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("email").value;
    var userSIPassword = document.getElementById("password").value;
    
   
    if(userSIEmail == null){
        return checkUserSIEmail();
    }else if(userSIPassword == null){
        return checkUserSIPassword();
    }else{
      firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.alert("LogIn successful.");

        window.location.replace("uploadStory.html");
       
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
      });
  
    }
  }
  


function signOut(){
// Sign out user
 firebase.auth().signOut().then((e)=>{
   window.alert(e)
   window.location.replace("index.html");
 })
 .catch((err) =>{
   // Handle errors
   window.alert(err);
 });
}  
  
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }else{
          window.location.replace("index.html");

        }
     
    } else {
    //   No user is signed in.
    }
  });
  
  
  