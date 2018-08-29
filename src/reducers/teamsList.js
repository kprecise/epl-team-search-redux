
import { LIST_TEAMS } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case LIST_TEAMS:
      return [...action.payload.data.teams];          
    }
    return state;
};