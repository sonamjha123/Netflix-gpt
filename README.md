# Netflix GPT

- Create React app
- Configured Tailwind CSS
- Header
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup 
npm install -g firebase-tools
- Deploy App to  production
- Create Sign Up user Account in Firebase
- Password Authentication in Firebase 
- Implement Sign in User API
- Created reduxStore with userSlice ->
- Set up Redux Store for user informations
  - npm i @reduxjs/toolkit
  - npm i react-redux

- Implemented SignOut
- Implemented Profile update
- fetch from TMDB movies

Bug Fixing :
- Sign up user displayName and profile picture updated
- if user is not logged on Redirect /browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback - good hygiene practice
- Added hardcoded values to the constants
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list
- Creating Custom Hook for Trailer video
- create movieSlice
- update store with movie Data
- Planninf for MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the YouTube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome.
- Build Secondarycontainer
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made Browse page amazing with Tailwind CSS
- usePopular, useTopRated, useUpcoming Movies.
- GPT Search feature
- Build MultiLanguage Pages
- Build GPT Search Suggestions using Open AI - Gemini API and TMDB API.
- Understanding Memoization of data in our apps
- Responsive UI

Note:
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

1.Sign in to Google - $ firebase login
Initiate your project
2.Run this command from your app's root directory:- $ firebase init
3.When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

- $ firebase deploy
After deploying, view your app at : netflixgpt-b45b2.web.app


# Features
- Login/Sign up 
 - Sign In / Sign up Form
 - redirect to Browse page
- Browse(after authentication)
 - Header
 - Main Movie
   - Trailer in Background
   - Title & Description
   - MovieSuggestions 
      - MovieLists * N
- netflixGPT
    - SearchBar
    - Movie Suggestions  


# Advanced Features
- Dark/light mode
- 