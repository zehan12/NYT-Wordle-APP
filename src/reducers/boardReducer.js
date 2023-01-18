import * as actions from "../actions/boardActions";

export const initialState = {
    board:[
        ["", "M", "A", "T", ""],
        ["", "R", "I", "X", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]
};

export default function boardReducer(state = initialState, action) {
    console.log(action,"action")
    switch (action.type) {
        case actions.BOARD:
            localStorage.setItem("dark", false);
            return { dark: false };
        default:
            return state;
    }
}