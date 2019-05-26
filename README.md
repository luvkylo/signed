# Signed

Signed is a web based application that was created for the A&R team at Nettwerk Music Group to find global unsigned artists using Spotify Top 50 playlists. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Use the following link to access our live site: X. From there you will log in with your personal Spotify account and allow the browser to access your location. From there you can sign in with your Google account to access the visualisation map and explore Top 50 playlists from multiple countries.

### Prerequisites

You must have access to both of the below accounts. They can be created for free using the hyperlinks. 

* [Spotify Account](https://www.spotify.com/us/signup/)
* [Google Account](https://myaccount.google.com/intro)


## Built With

* [Spotify API](https://developer.spotify.com/documentation/web-api/) - Used to access artist data and Top 50 Playlists
* [Geonames API](http://www.geonames.org/export/web-services.html) - Used to determine user location
* [Firebase](https://firebase.google.com/docs/auth/web/google-signin) - Used to authenticate user log in
* [D3 Visualization Tools](https://github.com/d3/d3/blob/master/API.md) - Used to generate the interactive map

<details> 
    <summary>How to get Spotify Keys</summary>

   <p>The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   1. Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   2. Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   3. Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   4. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API.</p>
</details>

## Authors

* [Alvin Ng](https://github.com/luvkylo)
* [Christopher Dang](https://github.com/Dangggchris)
* [Steven Meiers](https://github.com/SMLM42)
* [Taylor Dougherty](https://github.com/taydougherty)
* [Tomas Slemenson](https://github.com/TomSlemenson)
