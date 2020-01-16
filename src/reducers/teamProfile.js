
import { GET_TEAM_PROFILE } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case GET_TEAM_PROFILE:
      return [...action.payload.data.teams, ...state];          
    }
    return state;
};