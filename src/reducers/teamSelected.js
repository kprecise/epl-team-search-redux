
import { TEAM_SELECTED } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case TEAM_SELECTED:
      return [action.data.teamName, ...state];          
    }
    return state;
};