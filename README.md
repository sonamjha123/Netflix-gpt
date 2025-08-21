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


🎬 Netflix GPT – AI-Powered Movie Recommendation App
Netflix GPT is a React-based movie recommendation app that combines the power of TMDB API and OpenAI GPT API to provide users with smart, AI-generated movie suggestions. It also includes a Netflix-style UI, trailers, authentication, and multi-language support.

🔗 Live Demo
🌐 View Netflix GPT

📁 GitHub Repository
📂 GitHub Source Code

🚀 Features
🔐 Firebase Authentication (Sign Up / Sign In / Sign Out)
📺 Browse Page with trailers, movie rows, and categories
🤖 GPT-powered Movie Suggestions based on user prompts
🎞️ Fetches data using TMDB API (Now Playing, Popular Movies, etc.)
📱 Fully responsive and Netflix-like UI using Tailwind CSS
⚛️ State management using Redux Toolkit
🎬 Embedded YouTube trailers with autoplay and mute
🔄 Protected routing for authenticated users
🛠️ Tech Stack
Frontend
React.js (with Vite)
Tailwind CSS
Redux Toolkit
APIs
TMDB API – Movie data
OpenAI GPT API – Smart search suggestions
Backend/Services
Firebase – Authentication & hosting
🗂️ Project Structure
The app is organized for scalability and clarity, following a feature-based structure:

src/
  components/
    layout/      # App-wide layout and error boundary components
    common/      # Reusable UI elements (generic/shared)
    auth/        # Authentication-related components
    home/        # Home page and related components
    browse/      # Browsing movies, containers, video UI
    gpt/         # GPT-powered features
    movies/      # Movie-specific components
  hooks/         # Custom React hooks
  store/         # Redux store and slices
  utils/         # Pure utility functions and constants
  App.jsx        # Main App component
  main.jsx       # Entry point
Folder Descriptions:

components/: All UI components, grouped by feature or domain.
common/: Generic, reusable UI elements (e.g., spinners, shimmers).
layout/: Layout and error boundary components (header, footer, error pages).
auth/: Authentication and protected route components.
home/, browse/, gpt/, movies/: Feature-specific UI components.
hooks/: Custom React hooks for data fetching and logic.
store/: Redux store setup and slices for state management.
utils/: Utility functions, constants, API helpers.
styles/: Global and modular CSS (if any).
📸 Screenshots
alt text alt text

⚙️ Installation & Setup
# 1. Clone the repository
git clone https://github.com/codewithaakash22/NetflixGpt.git

# 2. Navigate to the project folder
cd NetflixGpt

# 3. Install dependencies
npm install

# 4. Create a .env file and add your keys
VITE_FIREBASE_API_KEY=your_key
VITE_TMDB_API_KEY=your_tmdb_key
VITE_OPENAI_API_KEY=your_openai_key

# 5. Run the app
npm run dev