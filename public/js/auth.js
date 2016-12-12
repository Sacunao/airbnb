$('.modal').modal();

var txtEmail = document.getElementById("email");
    var txtPassword = document.getElementById("password");
    var btnLogin = document.getElementById("login");
    
    btnLogin.addEventListener("click", function(e){
       e.preventDefault;
       var email = txtEmail.value;
       var pass = txtPassword.value;
       var auth = firebase.auth();
       var promise = auth.signInWithEmailAndPassword(email,pass);
        
       promise
          .then(function(e){
            window.location.href = "https://www.google.com.pe/";
          })
          .catch(function(e){
            console.log(e.message); 
          }); 
    });
    
    firebase.auth().onAuthStateChanged(function(firebaseUser){
       if(firebaseUser){
           console.log(firebaseUser);
       } else{
           console.log("not logged in");
       }
    });

