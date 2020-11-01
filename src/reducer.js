export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  token: null,
  // "BQARLpCrp6atAkoY4id_3Xazl5is_S-QunZDnCYoTLPaQmk5YvI-Pirbm6nxnKz0sLK4lymUSKkoMYsm0_k5PCxV4IFbBsd7xZ4R8HARN_xvAXwAaIk5tcPnm880R_pLOacKqYIF2CkN8zRLIWL-wHSKDw6i_E8KLRZ4aIXAqQJ0OdwC",
  toplist: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };

    case "SET_TOPLIST":
      return {
        ...state,
        toplist: action.toplist
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify
      };

    default:
      return state;
  }
};

export default reducer;
