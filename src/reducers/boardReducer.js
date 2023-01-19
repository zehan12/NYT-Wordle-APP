import * as actions from "../actions/boardActions";

export const initialState = {
    board: [
        ["", "M", "A", "T", ""],
        ["", "R", "I", "X", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ],
    currAttempt: { attempt: 0, letter: 0 },

};

export default function boardReducer(state = initialState, action) {
    console.log(action, "action")
    switch (action.type) {
        case actions.SET_BOARD:
            return { ...state, board: action.payload };
            break;
        case actions.SET_CURR_ATTEMPT:
            return { ...state, currAttempt: action.payload };
            break;
        default:
            return state;
    }
}