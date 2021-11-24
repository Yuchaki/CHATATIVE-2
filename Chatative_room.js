const firebaseConfig = {
      apiKey: "AIzaSyCLG6wHKudhwTQNWscpXrctQvw2yxKa1UI",
      authDomain: "chatative-146e4.firebaseapp.com",
      databaseURL: "https://chatative-146e4-default-rtdb.firebaseio.com",
      projectId: "chatative-146e4",
      storageBucket: "chatative-146e4.appspot.com",
      messagingSenderId: "584634937718",
      appId: "1:584634937718:web:936785d63eaa181eab8a57",
      measurementId: "G-CSP73V68Q1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
