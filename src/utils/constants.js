export const photoURL = "https://avatars.githubusercontent.com/u/58945854?v=4";

// this is TMDB API key from MOVIE LISTS-Now playing -
// https://developer.themoviedb.org/reference/movie-now-playing-list
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY, // Use the TMDB key from .env
  },
};

export const Image_CDN = "https://image.tmdb.org/t/p/w200";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/FR-en-20250630-TRIFECTA-perspective_70e52842-38a0-4ff9-841d-117202b467d4_small.jpg"; //Background image

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" , icon: "🇺🇸"},
  { identifier: "fr", name: "French" ,icon: "🇫🇷"},
  { identifier: "hi", name: "Hindi", icon: "🇮🇳"},
  { identifier: "es", name: "Spanish", icon: "🇪🇸"},
  { identifier: "de", name: "German", icon: "🇩🇪"},
  { identifier: "it", name: "Italian", icon: "🇮🇹"},
  { identifier: "ja", name: "Japanese", icon: "🇯🇵"},
  
];


