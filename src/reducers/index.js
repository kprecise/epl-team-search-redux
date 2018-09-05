import { combineReducers } from "redux";
import teamsListReducer from "./teamsList";
import teamSelectedReducer from "./teamSelected";
import teamProfileReducer from "./teamProfile";
import teamMatchUpReducer from "./teamMatchUp";

const reducers = combineReducers({ 
    teamsList: teamsListReducer,
    teamSelected: teamSelectedReducer,
    teamProfile: teamProfileReducer,
    teamMatchUp: teamMatchUpReducer
});

export default reducers;