var countryPlaylist = {
    "Argentina": "37i9dQZEVXbMMy2roB9myp",
    "Australia": "37i9dQZEVXbJPcfkRz0wJ0",
    "Austria": "37i9dQZEVXbKNHh6NIXu36",
    "Belgium": "37i9dQZEVXbJNSeeHswcKB",
    "Bolivia": "37i9dQZEVXbJqfMFK4d691",
    "Brazil": "37i9dQZEVXbMXbN3EUUhlg",
    "Bulgaria": "37i9dQZEVXbNfM2w2mq1B8",
    "Canada": "37i9dQZEVXbKj23U1GF4IR",
    "Chile": "37i9dQZEVXbL0GavIqMTeb",
    "Colombia": "37i9dQZEVXbOa2lmxNORXQ",
    "Costa Rica": "37i9dQZEVXbMZAjGMynsQX",
    "Czech Republic": "37i9dQZEVXbIP3c3fqVrJY",
    "Denmark": "37i9dQZEVXbL3J0k32lWnN",
    "Dominican Republic": "37i9dQZEVXbKAbrMR8uuf7",
    "Ecuador": "37i9dQZEVXbJlM6nvL1nD1",
    "El Salvador": "37i9dQZEVXbLxoIml4MYkT",
    "Estonia": "37i9dQZEVXbLesry2Qw2xS",
    "Finland": "37i9dQZEVXbMxcczTSoGwZ",
    "France": "37i9dQZEVXbIPWwFssbupI",
    "Germany": "37i9dQZEVXbJiZcmkrIHGU",
    "Greece": "37i9dQZEVXbJqdarpmTJDL",
    "Guatemala": "37i9dQZEVXbLy5tBFyQvd4",
    "Honduras": "37i9dQZEVXbJp9wcIM9Eo5",
    "Hong Kong": "37i9dQZEVXbLwpL8TjsxOG",
    "Hungary": "37i9dQZEVXbNHwMxAkvmF8",
    "Iceland": "37i9dQZEVXbKMzVsSGQ49S",
    "India": "37i9dQZEVXbLZ52XmnySJg",
    "Indonesia": "37i9dQZEVXbObFQZ3JLcXt",
    "Ireland": "37i9dQZEVXbKM896FDX8L1",
    "Israel": "37i9dQZEVXbJ6IpvItkve3",
    "Italy": "37i9dQZEVXbIQnj7RRhdSX",
    "Japan": "37i9dQZEVXbKXQ4mDTEBXq",
    "Latvia": "37i9dQZEVXbJWuzDrTxbKS",
    "Lithuania": "37i9dQZEVXbMx56Rdq5lwc",
    "Luxembourg": "37i9dQZEVXbKGcyg6TFGx6",
    "Malaysia": "37i9dQZEVXbJlfUljuZExa",
    "Malta": "37i9dQZEVXbMD2H5HJqmx9",
    "Mexico": "37i9dQZEVXbO3qyFxbkOE1",
    "Netherlands": "37i9dQZEVXbKCF6dqVpDkS",
    "New Zealand": "37i9dQZEVXbM8SIrkERIYl",
    "Nicaragua": "37i9dQZEVXbISk8kxnzfCq",
    "Norway": "37i9dQZEVXbJvfa0Yxg7E7",
    "Panama": "37i9dQZEVXbKypXHVwk1f0",
    "Paraguay": "37i9dQZEVXbNOUPGj7tW6T",
    "Peru": "37i9dQZEVXbJfdy5b0KP7W",
    "Philippines": "37i9dQZEVXbNBz9cRCSFkY",
    "Poland": "37i9dQZEVXbN6itCcaL3Tt",
    "Portugal": "37i9dQZEVXbKyJS56d1pgi",
    "Romania": "37i9dQZEVXbNZbJ6TZelCq",
    "Singapore": "37i9dQZEVXbK4gjvS1FjPY",
    "Slovakia": "37i9dQZEVXbKIVTPX9a2Sb",
    "South Africa": "37i9dQZEVXbMH2jvi6jvjk",
    "Spain": "37i9dQZEVXbNFJfN1Vw8d9",
    "Sweden": "37i9dQZEVXbLoATJ81JYXz",
    "Switzerland": "37i9dQZEVXbJiyhoAPEfMK",
    "Taiwan": "37i9dQZEVXbMnZEatlMSiu",
    "Thailand": "37i9dQZEVXbMnz8KIWsvf9",
    "Turkey": "37i9dQZEVXbIVYVBNw9D5K",
    "United Kingdom": "37i9dQZEVXbLnolsZ8PSNw",
    "United States": "37i9dQZEVXbLRQDuF5jeBp",
    "Uruguay": "37i9dQZEVXbMJJi3wgRbAy",
    "Vietnam": "37i9dQZEVXbLdGSmz6xilI",
    // "Andorra": "",
    // "Cyprus": "",
    // "Liechtenstein": "",
    // "Monaco": "",
}

var artist = {
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBGEi2FNlzHCBjl6Oit1qTAjPQ7oKSTER0",
    authDomain: "project-1-930f6.firebaseapp.com",
    databaseURL: "https://project-1-930f6.firebaseio.com",
    projectId: "project-1-930f6",
    storageBucket: "project-1-930f6.appspot.com",
    messagingSenderId: "772881617679"
  };
firebase.initializeApp(config);

var userTop50 = function() {
    $.ajax({
        url: 'https://api.spotify.com/v1/' 
    })

    $.each(data.artist, function(item, index) {
        var name = item;
        // do an ajax call to spotify to get the info on the artist
        // when done, receive result 
        // artist[result.name] = {"id": ..., "followers": ...}
    })
}

var provider = new firebase.auth.GoogleAuthProvider();
// Enable Google Authentication


function googleSignin() {
    firebase.auth()
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(token)
        console.log(user)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorCode)
        console.log(errorMessage)
      });

 }
 
 function googleSignout() {
    firebase.auth().signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
 }

