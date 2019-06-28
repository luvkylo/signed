// ------------------------------------------- Variables declarations --------------------------------------------
var count = 0;

var countryPlaylist = {
    "ARG": "37i9dQZEVXbMMy2roB9myp",
    "AUS": "37i9dQZEVXbJPcfkRz0wJ0",
    "AUT": "37i9dQZEVXbKNHh6NIXu36",
    "BEL": "37i9dQZEVXbJNSeeHswcKB",
    "BOL": "37i9dQZEVXbJqfMFK4d691",
    "BRA": "37i9dQZEVXbMXbN3EUUhlg",
    "BRG": "37i9dQZEVXbNfM2w2mq1B8",
    "CAN": "37i9dQZEVXbKj23U1GF4IR",
    "CHL": "37i9dQZEVXbL0GavIqMTeb",
    "COL": "37i9dQZEVXbOa2lmxNORXQ",
    "CRI": "37i9dQZEVXbMZAjGMynsQX",
    "CZE": "37i9dQZEVXbIP3c3fqVrJY",
    "DNK": "37i9dQZEVXbL3J0k32lWnN",
    "DOM": "37i9dQZEVXbKAbrMR8uuf7",
    "ECU": "37i9dQZEVXbJlM6nvL1nD1",
    "SLV": "37i9dQZEVXbLxoIml4MYkT",
    "EST": "37i9dQZEVXbLesry2Qw2xS",
    "FIN": "37i9dQZEVXbMxcczTSoGwZ",
    "FRA": "37i9dQZEVXbIPWwFssbupI",
    "DEU": "37i9dQZEVXbJiZcmkrIHGU",
    "GRC": "37i9dQZEVXbJqdarpmTJDL",
    "GTM": "37i9dQZEVXbLy5tBFyQvd4",
    "HND": "37i9dQZEVXbJp9wcIM9Eo5",
    "CHN": "37i9dQZEVXbLwpL8TjsxOG",
    "HUN": "37i9dQZEVXbNHwMxAkvmF8",
    "ISL": "37i9dQZEVXbKMzVsSGQ49S",
    "IND": "37i9dQZEVXbLZ52XmnySJg",
    "IDN": "37i9dQZEVXbObFQZ3JLcXt",
    "IRL": "37i9dQZEVXbKM896FDX8L1",
    "ISR": "37i9dQZEVXbJ6IpvItkve3",
    "ITA": "37i9dQZEVXbIQnj7RRhdSX",
    "JPN": "37i9dQZEVXbKXQ4mDTEBXq",
    "LVA": "37i9dQZEVXbJWuzDrTxbKS",
    "LTU": "37i9dQZEVXbMx56Rdq5lwc",
    "LUX": "37i9dQZEVXbKGcyg6TFGx6",
    "MYS": "37i9dQZEVXbJlfUljuZExa",
    "MEX": "37i9dQZEVXbO3qyFxbkOE1",
    "NLD": "37i9dQZEVXbKCF6dqVpDkS",
    "NZL": "37i9dQZEVXbM8SIrkERIYl",
    "NIC": "37i9dQZEVXbISk8kxnzfCq",
    "NOR": "37i9dQZEVXbJvfa0Yxg7E7",
    "PAN": "37i9dQZEVXbKypXHVwk1f0",
    "PRY": "37i9dQZEVXbNOUPGj7tW6T",
    "PER": "37i9dQZEVXbJfdy5b0KP7W",
    "PHL": "37i9dQZEVXbNBz9cRCSFkY",
    "POL": "37i9dQZEVXbN6itCcaL3Tt",
    "PRT": "37i9dQZEVXbKyJS56d1pgi",
    "ROU": "37i9dQZEVXbNZbJ6TZelCq",
    "SVK": "37i9dQZEVXbKIVTPX9a2Sb",
    "ZAF": "37i9dQZEVXbMH2jvi6jvjk",
    "ESP": "37i9dQZEVXbNFJfN1Vw8d9",
    "SWE": "37i9dQZEVXbLoATJ81JYXz",
    "CHE": "37i9dQZEVXbJiyhoAPEfMK",
    "TWN": "37i9dQZEVXbMnZEatlMSiu",
    "THA": "37i9dQZEVXbMnz8KIWsvf9",
    "TUR": "37i9dQZEVXbIVYVBNw9D5K",
    "GBR": "37i9dQZEVXbLnolsZ8PSNw",
    "USA": "37i9dQZEVXbLRQDuF5jeBp",
    "URY": "37i9dQZEVXbMJJi3wgRbAy",
    "VNM": "37i9dQZEVXbLdGSmz6xilI",
    // "Andorra": "",
    // "Cyprus": "",
    // "Liechtenstein": "",
    // "Monaco": "",
}

var artists = {};
var counter = 1
var countryCode = "USA";

var playlistURL = "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp";
var artistURL = "https://api.spotify.com/v1/artists/";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDBCMWsA-Z4KgEoiQ2CC8pGOiHOcEqHLaQ",
    authDomain: "chris-project-7ac32.firebaseapp.com",
    databaseURL: "https://chris-project-7ac32.firebaseio.com",
    projectId: "chris-project-7ac32",
    storageBucket: "chris-project-7ac32.appspot.com",
    messagingSenderId: "533057620555",
    appId: "1:533057620555:web:54b894c6eb7bae2d"
};

var userEmail = "";

firebase.initializeApp(config);
var database = firebase.database();
var clicked = false;
var signedClick = false;
var ReSearch = true;
var xhr = '';
var xhr1 = [];
var xhr2 = [];
var xhr3 = [];

// ---------------------------------------- Spotify Authentication ----------------------------------------------


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

function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

function displayResults(trackNum, name, trackNames, followers, genre, photo, spotifyId, newlabel) {

    $("#spinner").hide();

    var newRow = $("<tr>");


    var number = $("<td>").text(trackNum);

    var newArtist = $("<td>").text(name);


    var trackName = "";
    $.each(trackNames, function (key, item) {
        trackName = trackName + item + "\n ";
    });
    var newTrackName = $("<td>").text(trackName);
    newTrackName.attr("data-count", count);
    newTrackName.html(newTrackName.html().replace(/\n/g, '<br/>'));
    newTrackName.html(newTrackName.html().replace(/\n/g, '<br/>'));
    var newLabel = $("<td>").text(newlabel);


    var popup = $("<td>");

    popup.attr("class", "popup");
    popup.attr("data-count", count);

    var popUpSpan = $("<span>");
    popUpSpan.attr("class", "popuptext");

    var pop = "myPopup-" + count;
    popUpSpan.attr("id", pop);
    
    // data-trackNum=' + trackNum +' data-name=' + name + ' data-trackName=' + trackNames + ' data-followers=' + followers + ' data-genre=' + genre + ' data-photo=' + photo + ' data-spotifyId=' + spotifyId + ' data-newlabel=' + newlabel + '

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            popup.html('<p class="more_info">More Info<button class="favButt" id="favoriteButton' + trackNum +'">+</button></p>');
                $("#favoriteButton" + trackNum).attr({
                trackNum: trackNum,
                name: name,
                trackNames: trackNames,
                followers: followers,
                genre: genre,
                photo: photo,
                spotifyId: spotifyId,
                newlabel: newlabel
                });
            popup.append(popUpSpan);
        } else {
            popup.html('<p class="more_info">More Info</p>');
            popup.append(popUpSpan);
        }
      });
   

    try {
        genre = capitalize_Words(genre);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        if (followers != null) {
            followers = followers.toLocaleString();
        }
        else {
            followers = 0;
        }

        popUpSpan.html('<div class="card-container"><img src="' + photo + '" class="image-popup" alt="Artist Photo"><div class="artist_name">' + name + '</div><div class="spotify_id">Spotify ID: ' + spotifyId + '</div><div class="genre">Genre: ' + genre + '</div><div class="followers">Followers: ' + followers + '</div></div>');
        newRow.append(number, newArtist, newTrackName, newLabel, popup);

        $("#artist-data-table").append(newRow);

        count++;
    }

}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("artist-data-table");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (n === 0) {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (n === 0) {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {

            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


// var userTop50 = function() {
// ajax call for playlist
// track number, artist, track name, spotify id, label
function spotifySearch(playlistId) {
    ReSearch = true;
    var playlistURL = "https://api.spotify.com/v1/playlists/" + playlistId;

    xhr = $.ajax({
        url: playlistURL,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (data) {
            var response = data.tracks.items;
            var t = 0;

            $.each(response, function (key, item) {
                var artist = item.track.artists;
                $.each(artist, function (k, i) {
                    var artistName = i.name;
                    var artistId = i.id;
                    var label = "";
                    var followers = 0;
                    var genre = "";
                    var photo = "";
                    var trackNum = 0;
                    var trackName = [];
                    var spotifyId = [];


                    artistURL = "https://api.spotify.com/v1/artists/" + artistId + "/albums";

                    xhr1.push($.ajax({
                        url: artistURL,
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        },
                        success: function (data) {
                            albumId = data.items[0].id;

                            albumURL = "https://api.spotify.com/v1/albums/" + albumId;
                            xhr2.push($.ajax({
                                url: albumURL,
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken
                                },
                                success: function (data) {
                                    if (data.label) {
                                        label = data.label;
                                    }
                                    else {
                                        label = "Unsigned";
                                    }

                                    artistURL = "https://api.spotify.com/v1/artists/" + artistId;
                                    xhr3.push($.ajax({
                                        url: artistURL,
                                        method: "GET",
                                        headers: {
                                            'Authorization': 'Bearer ' + accessToken
                                        },
                                        success: function (data) {
                                            t++;
                                            followers = data.followers.total;
                                            genre = data.genres[0];
                                            photo = data.images[0].url;
                                            trackNum = t;
                                            if (artists[artistName] != undefined) {
                                                trackName = artists[artistName].trackName;
                                                spotifyId = artists[artistName].spotifyId;
                                            }

                                            trackName.push(item.track.name);

                                            spotifyId.push(i.id);

                                            // var genre = i.genre;
                                            // var photo = i.images[0].url

                                            artists[artistName] = {
                                                "trackNum": trackNum,
                                                "trackName": trackName,
                                                "spotifyId": spotifyId,
                                                "label": label,
                                                "followers": followers,
                                                "genre": genre,
                                                "photo": photo
                                            }
                                        },
                                        statusCode: {
                                            429: function () {
                                                xhr.abort();
                                                xhr1.forEach(function(item) {
                                                    item.abort()
                                                });
                                                xhr2.forEach(function(item) {
                                                    item.abort()
                                                });
                                                xhr3.forEach(function(item) {
                                                    item.abort()
                                                });
                                                $(".table_row").html('<div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> You have reached your rate limit. The page will retry in 5 seconds or you can manually reload the page. </p></div>');
                                                $("#spinner").show();
                                                xhr1 = [];
                                                xhr2 = [];
                                                xhr3 = [];
                                                if (ReSearch) {
                                                    ReSearch = false;
                                                    setTimeout(function() {
                                                        $(".table_row").html('<div class="row"><div class="col-md-12"><div class="data-table"><h3 class="card-header text-center">DATA TABLE</h3></div><div class="scroll_table"></div><div id="popup-container"><div class="card-body"><!--Table Title--><table class="table table-sm table-hover" id="artist-data-table"><thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th><th scope="col"></th></tr></thead></table><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div></div></div></div></div>');
                                                        artists = {};
                                                        spotifySearch(playlistId);
                                                        setTimeout(function () {
                                                            var i = 1;
                                                            $.each(artists, function (key, item) {
                                                                displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                                                i++;
                                                            });
                                                        }, 7000);
                                                    }, 5000);
                                                }
                                            }
                                        }
                                    }));
                                },
                                statusCode: {
                                    429: function () {
                                        xhr.abort();
                                        xhr1.forEach(function(item) {
                                            item.abort()
                                        });
                                        xhr2.forEach(function(item) {
                                            item.abort()
                                        });
                                        xhr3.forEach(function(item) {
                                            item.abort()
                                        });
                                        $(".table_row").html('<div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> You have reached your rate limit. The page will retry in 5 seconds or you can manually reload the page. </p></div>');
                                        $("#spinner").show();
                                        xhr1 = [];
                                        xhr2 = [];
                                        xhr3 = [];
                                        if (ReSearch) {
                                            ReSearch = false;
                                            setTimeout(function() {
                                                $(".table_row").html('<div class="row"><div class="col-md-12"><div class="data-table"><h3 class="card-header text-center">DATA TABLE</h3></div><div class="scroll_table"></div><div id="popup-container"><div class="card-body"><!--Table Title--><table class="table table-sm table-hover" id="artist-data-table"><thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th><th scope="col"></th></tr></thead></table><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div></div></div></div></div>');
                                                artists = {};
                                                spotifySearch(playlistId);
                                                setTimeout(function () {
                                                    var i = 1;
                                                    $.each(artists, function (key, item) {
                                                        displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                                        i++;
                                                    });
                                                }, 7000);
                                            }, 5000);
                                        }
                                    }
                                }
                            }));
                        },
                        statusCode: {
                            429: function () {
                                xhr.abort();
                                xhr1.forEach(function(item) {
                                    item.abort()
                                });
                                xhr2.forEach(function(item) {
                                    item.abort()
                                });
                                xhr3.forEach(function(item) {
                                    item.abort()
                                });
                                $(".table_row").html('<div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> You have reached your rate limit. The page will retry in 5 seconds or you can manually reload the page. </p></div>');
                                $("#spinner").show();
                                xhr1 = [];
                                xhr2 = [];
                                xhr3 = [];
                                if (ReSearch) {
                                    ReSearch = false;
                                    setTimeout(function() {
                                        $(".table_row").html('<div class="row"><div class="col-md-12"><div class="data-table"><h3 class="card-header text-center">DATA TABLE</h3></div><div class="scroll_table"></div><div id="popup-container"><div class="card-body"><!--Table Title--><table class="table table-sm table-hover" id="artist-data-table"><thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th><th scope="col"></th></tr></thead></table><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div></div></div></div></div>');
                                        artists = {};
                                        spotifySearch(playlistId);
                                        setTimeout(function () {
                                            var i = 1;
                                            $.each(artists, function (key, item) {
                                                displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                                i++;
                                            });
                                        }, 7000);
                                    }, 5000);
                                }
                            }
                        }
                    }));
                });
            });
        },
        statusCode: {
            429: function () {
                xhr.abort();
                xhr1.forEach(function(item) {
                    item.abort()
                });
                xhr2.forEach(function(item) {
                    item.abort()
                });
                xhr3.forEach(function(item) {
                    item.abort()
                });
                $(".table_row").html('<div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> You have reached your rate limit. The page will retry in 5 seconds or you can manually reload the page. </p></div>');
                $("#spinner").show();
                xhr1 = [];
                xhr2 = [];
                xhr3 = [];
                if (ReSearch) {
                    ReSearch = false;
                    setTimeout(function() {
                        $(".table_row").html('<div class="row"><div class="col-md-12"><div class="data-table"><h3 class="card-header text-center">DATA TABLE</h3></div><div class="scroll_table"></div><div id="popup-container"><div class="card-body"><!--Table Title--><table class="table table-sm table-hover" id="artist-data-table"><thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th><th scope="col"></th></tr></thead></table><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div></div></div></div></div>');
                        artists = {};
                        spotifySearch(playlistId);
                        setTimeout(function () {
                            var i = 1;
                            $.each(artists, function (key, item) {
                                displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                i++;
                            });
                        }, 7000);
                    }, 5000);
                }
            }
        }
    });
}

// ---------------------------------------- operations prior web loading ----------------------------------------------

// get Geo location and country name
navigator.geolocation.getCurrentPosition(function (position) {

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
    }).then(function (response) {

        iso2 = response.geonames[0].countryCode;

        url = "https://api.worldbank.org/v2/country/" + iso2.toLowerCase() + "?format=json"

        $.ajax({
            url: url,
            method: "GET",
            success: function (result) {
                countryCode = result[1][0].id;
                console.log(countryCode);
            }
        })
    });

})

// when the sign in button is pressed
function googleSignin() {
    xhr.abort();
    xhr1.forEach(function(item) {
        item.abort()
    });
    xhr2.forEach(function(item) {
        item.abort()
    });
    xhr3.forEach(function(item) {
        item.abort()
    });
    xhr1 = [];
    xhr2 = [];
    xhr3 = [];
    firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        var usersRef = firebase.database().ref("users");
        if (user) {
            database.ref().once("value", function (data) {
                var userList = data.val().users;
                if (userList[user.uid] == undefined) {
                    usersRef.child(user.uid).set({
                        displayName: user.displayName,
                        email: user.email,
                        favorite: ""
                    });
                }
            });
            // to get current user
            // remove all display

            $("#artist-data-table").empty();
            $('html,body').animate({ scrollTop: $(".scroll_table_2").offset().top }, 'slow');
            $("#artist-data-table").html('<thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th></tr></thead><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div>');
            $("#spinner").show();

            // ------------------------------ add map and display table -----------------------------------
            $(".map_row").css('display', 'initial');

            artists = {};

            // default playlist to users location after sign in
            setTimeout(function () {
                if (!clicked && !signedClick) {
                    $.ajax({
                        url: "https://api.worldbank.org/v2/country/" + countryCode + "?format=json",
                        method: "GET",
                        success: function (r) {
                            $(".data-table").append($("<h3>").addClass("card-header text-center country").text("Your current location: " + r[1][0].name));
                            if (!countryPlaylist.hasOwnProperty(countryCode)) {
                                $("#artist-data-table").empty();
                                $("#spinner").hide();
                                $("#artist-data-table").append($("<h2>").addClass("text-center").text("Sorry the country you are currently located does not have a playlist!"));
                            }
                            else {
                                spotifySearch(countryPlaylist[countryCode]);
                                setTimeout(function () {
                                    var i = 1;
                                    if (!clicked && !signedClick) {
                                        signedClick = true;
                                        $.each(artists, function (key, item) {
                                            displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                            i++;
                                        });
                                    }
                                }, 7000);
                            }
                        }
                    });
                }
            }, 3000);

        }
    }).catch(function (error) {
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
    xhr.abort();
    xhr1.forEach(function(item) {
        item.abort()
    });
    xhr2.forEach(function(item) {
        item.abort()
    });
    xhr3.forEach(function(item) {
        item.abort()
    });
    xhr1 = [];
    xhr2 = [];
    xhr3 = [];
    firebase.auth().signOut()

        .then(function () {
            console.log('Signout Succesfull');
        }, function (error) {
            console.log('Signout Failed');
        });
    $(".signin").removeClass("invisible").css("display", "initial");
    $(".signout").addClass("invisible").css("display", "none");
    $(".fav").addClass("invisible").css("display", "none");
    $(".map_row").css('display', 'none');
    $("#artist-data-table").empty();
    $("#artist-data-table").html('<thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th></tr></thead><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div>');
    $("#spinner").show();
    $(".country").remove();
    artists = {};
    spotifySearch("37i9dQZEVXbLRQDuF5jeBp");
    setTimeout(function () {
        var i = 1;
        $.each(artists, function (key, item) {
            displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
            i++;
        });
    }, 7000);

}

// ---------------------------------------- load web --------------------------------------------

$(document).ready(function () {

    // When the user clicks on More Info, open the popup!

    $(document.body).on("click", ".popup", function () {

        $('html,body').animate({ scrollTop: $(".scroll_table").offset().top }, 'slow');

        var pop = "myPopup-" + $(this).attr("data-count");
        //console.log(pop);
        var showPopup = document.getElementById(pop);
        console.log(showPopup);
        showPopup.classList.toggle("show");

    });
        // trackNum, name, trackNames, followers, genre, photo, spotifyId, newlabel
    $(document.body).on("click", ".favButt", function () {
        console.log("clicked");
        var favorites = [];

        let trackNum = $(this).attr("tracknum");
        let name = $(this).attr("name");
        let trackNames = $(this).attr("tracknames");
        let followers = $(this).attr("followers");
        let genre = $(this).attr("genre");
        let photo = $(this).attr("photo");
        let spotifyId = $(this).attr("spotifyid");
        let newlabel = $(this).attr("newlabel");

        var newFavArtist = {
            trackNum: trackNum,
            name: name,
            trackNames: trackNames,
            followers: followers,
            genre: genre,
            photo: photo,
            spotifyId: spotifyId,
            newLabel: newlabel
        }

        console.log(newFavArtist);

        favorites.push(newFavArtist);

        console.log(favorites);
        database.ref("/favoriteTracks").set({
            tracks: favorites
        });
    })

    $("#artist-data-table").empty();
    $("#artist-data-table").html('<thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th></tr></thead><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div>');

    spotifySearch("37i9dQZEVXbLRQDuF5jeBp");

    setTimeout(function () {
        var i = 1;
        $.each(artists, function (key, item) {
            displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
            i++;
        });
    }, 7000);


    // --------------------- add table of centent to the main display ----------------------------------


    // ---------------------------- sign in and sign out operations ----------------------------------------



    // ------------------------------------ make the map -----------------------------------------------------

    // D3 map
    // change all population related variable name into singer related name.

    // this need to be put into the html once user is logged in
    "use strict";

    var format = d3.format(','); // Set tooltips

    var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
        return "<strong>Country: </strong><span class='details'>".concat(d.properties.name, "<br></span>");
    });
    var margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if ($(window).width() < (960 - margin.left - margin.right)) {
        var width = $(window).width() - margin.left - margin.right;
        var height = ($(window).width() * (500 / 960)) - margin.top - margin.bottom;
    }
    else {
        var width = 960 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;
    }
    var color = d3.scaleThreshold().domain([1, 2]).range(['rgb(107,174,214)', 'rgb(8,81,156)']);

    // Note select('body') needs to select the parent element before the table
    var svg = d3.select('#world-map').append('svg').attr('width', width).attr('height', height).append('g').attr('class', 'map');
    var projection = d3.geoRobinson().scale(width / 7).rotate([352, 0, 0]).translate([width / 2, height / 2]);
    var path = d3.geoPath().projection(projection);

    svg.call(tip);

    queue().
        defer(d3.json, 'assets/javascript/world_countries.json').
        await(ready);

    function ready(error, data) {
        var playlist = {};
        data.features.forEach(function (d) {
            if (countryPlaylist[d.id] != undefined) {
                d.playlist = 2;
                playlist[d.id] = 2;
            }
            else {
                d.playlist = 0;
                playlist[d.id] = 0;
            }
        });

        svg.append('g').attr('class', 'countries').selectAll('path').data(data.features).enter().append('path').attr('d', path).style('fill', function (d) {
            return color(playlist[d.id]);
        }).style('stroke', 'white').style('opacity', 0.8).style('stroke-width', 0.3) // tooltips
            .on('mouseover', function (d) {
                tip.show(d);
                d3.select(this).style('opacity', 1).style('stroke-width', 3);
            }).on('mouseout', function (d) {
                tip.hide(d);
                d3.select(this).style('opacity', 0.8).style('stroke-width', 0.3);
            }).on('click', function (d) {
                if (!clicked) {
                    clicked = true;
                    signedClick = true;
                    xhr.abort();
                    xhr1.forEach(function(item) {
                        item.abort()
                    });
                    xhr2.forEach(function(item) {
                        item.abort()
                    });
                    xhr3.forEach(function(item) {
                        item.abort()
                    });
                    xhr1 = [];
                    xhr2 = [];
                    xhr3 = [];
                    if (d.playlist === 2) {
                        $("#artist-data-table").empty();
                        $('html,body').animate({ scrollTop: $(".scroll_table_2").offset().top }, 'slow');
                        $("#artist-data-table").html('<thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th></tr></thead><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div>');
                        $("#spinner").show();
                        console.log($(".country"));
                        $(".country").remove();
                        var selected = d.properties.name;
                        $(".data-table").append($("<h3>").addClass("card-header text-center country").text("You have selected: " + selected));
                        artists = {};
                        spotifySearch(countryPlaylist[d.id]);
                        setTimeout(function () {
                            $("#artist-data-table").empty();
                            $("#artist-data-table").html('<thead><tr><th scope="col" onclick="sortTable(0)">Nº</th><th scope="col" onclick="sortTable(1)">ARTIST</th><th scope="col" onclick="sortTable(2)">TRACK NAME</th><th scope="col" onclick="sortTable(3)">LABEL</th><th scope="col"></th></tr></thead><div id="spinner"><img id="img-spinner" src="https://media.giphy.com/media/AEs9flr7tNPBw1cs8Q/giphy.gif" alt="loading"><p> LOADING </p></div>');
                            $("#spinner").show();
                            var i = 1;
                            $.each(artists, function (key, item) {
                                displayResults(i, key, item.trackName, item.followers, item.genre, item.photo, item.spotifyId, item.label);
                                i++;
                            });
                            clicked = false;
                        }, 7000);
                    }
                    else {
                        $(".country").remove();
                        $("#artist-data-table").empty();
                        $("#spinner").hide();
                        $("#artist-data-table").append($("<h2>").addClass("text-center").text("Sorry the country you selected does not have a playlist!"));
                        clicked = false;
                    }
                }
            });

        // add svg.append("g").on("click") - > to scroll down to the list of singer from their country

        svg.append('path').datum(topojson.mesh(data.features, function (a, b) {
            return a.id !== b.id;
        })).attr('class', 'names').attr('d', path);
    }

    d3.select(window).on('resize', resize);

    function resize() {
        if ($(window).width() < (960 - margin.left - margin.right)) {
            width = $(window).width() - margin.left - margin.right;
            height = ($(window).width() * (500 / 960)) - margin.top - margin.bottom;

            projection.scale(width / 7).rotate([352, 0, 0]).translate([width / 2, height / 2]);
            d3.select('#world-map').attr('width', width).attr('height', height);

            d3.select("svg").attr("width", width).attr("height", height);

            d3.selectAll("path").attr('d', path);
        }
    }

});
