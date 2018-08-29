import { combineReducers } from "redux";
import teamsListReducer from "./teamsList";
import teamSelectedReducer from "./teamSelected";
import teamProfileReducer from "./teamProfile";

const reducers = combineReducers({ 
    teamsList: teamsListReducer,
    teamSelected: teamSelectedReducer,
    teamProfile: teamProfileReducer 
});

export default reducers;