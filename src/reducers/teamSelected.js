
import { TEAM_SELECTED } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case TEAM_SELECTED:
        console.log('reducer called', action.data.teamName)
      return [action.data.teamName, ...state];          
    }
    return state;
};