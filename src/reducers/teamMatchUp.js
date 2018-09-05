
import { GET_TEAM_MATCHUP } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case GET_TEAM_MATCHUP:
      return [...action.payload.data.event];          
    }
    return state;
};