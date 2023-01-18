import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    board: boardReducer
});

export default rootReducer;