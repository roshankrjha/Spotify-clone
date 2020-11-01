export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://7fn34.csb.app/";

const clientId = "c5e9b777d5fa43a6a2f73b5d83256422";

const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
