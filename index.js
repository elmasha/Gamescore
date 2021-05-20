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
        window.location.replace("uploadStory.html");
        (document).ready(function(){
            ('.toast').toast('show');
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
      });
  
    }
  }
  
  
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
           
        })
    } else {
    //   No user is signed in.
    }
  });
  
  
  