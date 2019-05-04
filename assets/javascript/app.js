// ------------------------------------------- Variables declarations --------------------------------------------
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

var artists = {};

var countryName = "United States";

var playlistURL = "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp";
var artistURL = "https://api.spotify.com/v1/artists/";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBGEi2FNlzHCBjl6Oit1qTAjPQ7oKSTER0",
  authDomain: "project-1-930f6.firebaseapp.com",
  databaseURL: "https://project-1-930f6.firebaseio.com",
  projectId: "project-1-930f6",
  storageBucket: "project-1-930f6.appspot.com",
  messagingSenderId: "772881617679"
};

var userEmail = "";

firebase.initializeApp(config);
var database = firebase.database();

// ---------------------------------------- Spotify Authentication ----------------------------------------------


var playlistURL = "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp";

// Find hash of URL
var hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
var accessToken = hash.access_token;

var authorizedURL = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID and redirect URI
var clientId = 'ce01ac1e69164952b0ee29ea90b860b6';
var redirectUri = 'https://luvkylo.github.io/signed/';

// If there is no token, redirect to Spotify authorization
if (!accessToken) {
  window.location = authorizedURL + "?client_id=" + clientId + "&redirect_uri=" + redirectUri + "&response_type=token";
}


// --------------------------------------------- Functions --------------------------------------------------
// Function that get label name
function musicBrainzAPI(name) {
    var search = name;
    var queryURL = "https://musicbrainz.org/ws/2/artist?query=" + search + "&fmt=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        MBID = response.artists[0].id;
        queryURL = "http://musicbrainz.org/ws/2/artist/" + MBID + "?inc=label-rels&fmt=json";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            return response.relations[0].label.name;
        });
    });
}


// var userTop50 = function() {
// ajax call for playlist
// track number, artist, track name, spotify id, label
    $.ajax({
        url: playlistURL,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function(data) {
            var response = data.tracks.items;

            $.each(response, function(key, item){
                var artist = item.track.artist;
                console.log(artist);
                $.each(artist, function(k, i) {
                    var artistName = i.name;
                    console.log(artistName);
                    var trackNum = item.track.track_number;
                    console.log(trackNum);
                    var trackName = item.track.name;
                    console.log(trackName);
                    var spotifyId = i.id;
                    console.log(spotifyId);
                    var label = musicBrainzAPI(artistName);
                    console.log(label);

                    if (artists[artistName] != undefined) {
                        var numList = artists.artistName.trackNum;
                        numList.push(trackNum);
                        var nameList = artists.artistName.trackName;
                        nameList.push(trackName);
                        artists[artistName] = {
                            "trackNum": numList,
                            "trackName": nameList,
                            "spotifyId": spotifyId,
                            "label": label
                        }
                    }
                    else {
                        artists[artistName] = {
                            "trackNum": [trackNum],
                            "trackName": [trackName],
                            "spotifyId": spotifyId,
                            "label": label
                        }
                    }
                });
            });
            console.log(artists);
        }
    });  

// ajax call for artist
        // $.ajax({
        //     url: artistURL,
        //     method: "GET",
        //     headers: {
        //         'Authorization': 'Bearer ' + accessToken
        //     },
        //     success: function(data) {
        //         console.log(data)
        //     }
        // });
    // });
    //     $.each(data.artist, function(item, index) {
    //         var name = item;
    //         // do an ajax call to spotify to get the info on the artist
    //         // when done, receive result 
    //         // artist[result.name] = {"id": ..., "followers": ...}
    //     });
    // };



// ---------------------------------------- operations prior web loading ----------------------------------------------

// get Geo location and country name
navigator.geolocation.getCurrentPosition(function(position) {

    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var latFix = lat.toFixed(2);
    var longFix = long.toFixed(2);

    console.log(latFix);
    console.log(longFix);

    // concatenate key and long/lat as string into GET URL
    var queryURL = "https://secure.geonames.org/findNearbyJSON?lat=" + latFix + "&lng=" + longFix + "&username=dangggchris"
    console.log(queryURL);

    // Ajax call to API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
    countryName = response.geonames[0].countryName;

    console.log(countryName);
    });

})

// when the sign in button is pressed
function googleSignin() {
    firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        var usersRef = firebase.database().ref("users");
        if (user) {
            database.ref().once("value", function(data) {
                var userList = data.val().users;
                if (userList[user.uid] == undefined) {
                    usersRef.child(user.uid).set({ 
                        displayName: user.displayName,
                        email: user.email,
                        favorite: ""
                    });
                }
            });
            // var user = firebase.auth().currentUser;
            // to get current user
            // remove all display
            // ------------------------------ add map and display table -----------------------------------
        }
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorCode);
        console.log(errorMessage);
    });

    $(".signin").addClass("invisible").css("display", "none");
    $(".signout").removeClass("invisible").css("display", "initial");
    $(".fav").removeClass("invisible").css("display", "initial");

}

// when the signout button is pressed
function googleSignout() {
    firebase.auth().signOut()
    
    .then(function() {
    console.log('Signout Succesfull');
    }, function(error) {
    console.log('Signout Failed');
    });
    $(".signin").removeClass("invisible").css("display", "initial");
    $(".signout").addClass("invisible").css("display", "none");
    $(".fav").addClass("invisible").css("display", "none");
}

// ---------------------------------------- load web --------------------------------------------

$(document).ready(function() {


    // --------------------- add table of centent to the main display ----------------------------------


    // ---------------------------- sign in and sign out operations ----------------------------------------
    


    // ------------------------------------ make the map -----------------------------------------------------

    // D3 map
    // change all population related variable name into singer related name.

    // this need to be put into the html once user is logged in
    // "use strict";

    // var format = d3.format(','); // Set tooltips

    // var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
    //     return "<strong>Country: </strong><span class='details'>".concat(d.properties.name, "<br></span><strong># of Unsiged Singers: </strong><span class='details'>").concat(format(d.population), "</span>");
    //         // change d.population to {singer variable from ready function}
    // });
    // var margin = {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0
    // };
    // var width = 960 - margin.left - margin.right;
    // var height = 500 - margin.top - margin.bottom;
    // var color = d3.scaleThreshold().domain([
    //     1, 2, 4, 8, 12, 20, 28, 36, 44, 50
    //     ]).range([
    //     'rgb(247,251,255)', 'rgb(222,235,247)', 'rgb(198,219,239)', 'rgb(158,202,225)', 
    //     'rgb(107,174,214)', 'rgb(66,146,198)', 'rgb(33,113,181)', 'rgb(8,81,156)', 'rgb(8,48,107)', 
    //     'rgb(3,19,43)']);

    // Note select('body') needs to select the parent element before the table
    // var svg = d3.select('#world-map').append('svg').attr('width', width).attr('height', height).append('g').attr('class', 'map');
    // var projection = d3.geoRobinson().scale(148).rotate([352, 0, 0]).translate([width / 2, height / 2]);
    // var path = d3.geoPath().projection(projection);

    // svg.call(tip);

    // queue().
    // defer(d3.json, 'world_countries.json').
    // defer(d3.tsv, 'world_population.tsv').
    // await(ready);
    // // remove queue.defer({d3.csv, 'world_population.tsv'})

    // function ready(error, data, population) {
    //     var populationById = {};
    //     population.forEach(function (d) {
    //         populationById[d.id] = +d.population;
    //         // in "population.forEach(d => { populationById[d.id] = +d.population; });" - use the existing country list, for each country, parse through spotify API (a function from Taylor), count unsigned singer, push # and alpha 3 code (use geoname API to convert country name to alpha 3 code) into "populationById" obj, append to the table below, give them class name of their country
    //     });
    //     data.features.forEach(function (d) {
    //         d.population = populationById[d.id];
    //         // in "data.features.forEach(d => { d.population = populationById[d.id] });" - use the alpha 3 country code in "populationById" obj to push # of unsigned singer into data
    //     });

    //     svg.append('g').attr('class', 'countries').selectAll('path').data(data.features).enter().append('path').attr('d', path).style('fill', function (d) {
    //         return color(populationById[d.id]);
    //     }).style('stroke', 'white').style('opacity', 0.8).style('stroke-width', 0.3) // tooltips
    //     .on('mouseover', function (d) {
    //         tip.show(d);
    //         d3.select(this).style('opacity', 1).style('stroke-width', 3);
    //     }).on('mouseout', function (d) {
    //         tip.hide(d);
    //         d3.select(this).style('opacity', 0.8).style('stroke-width', 0.3);
    //     });
    //     // add svg.append("g").on("click") - > to scroll down to the list of singer from their country

    //     svg.append('path').datum(topojson.mesh(data.features, function (a, b) {
    //         return a.id !== b.id;
    //     })).attr('class', 'names').attr('d', path);
    // }

});