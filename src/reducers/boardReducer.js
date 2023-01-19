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
    correctWord: "RIGHT",
    wordSet: new Set(),
    currAttempt: { attempt: 0, letter: 0 },

};


export default function boardReducer(state = initialState, action) {
    console.log(action, "action")
    let newBoard
    switch (action.type) {
        case actions.SET_BOARD:
            return { ...state, board: action.payload };
            break;

        case actions.SET_CURR_ATTEMPT:
            return { ...state, currAttempt: action.payload };
            break;

        case 'ON_ENTER':
            const currWord = action.payload.currWord;
            let gameOver = { gameOver: false, guessedWord: false };
            // if (state.wordSet.has(currWord.toLowerCase())) {
            //     state.currAttempt = { attempt: state.currAttempt.attempt + 1, letter: 0 };
            // } else {
            //     alert("Word not found");
            // }
            // if (currWord === state.correctWord) {
            //     gameOver = { gameOver: true, guessedWord: true };
            // } else if (state.currAttempt.attempt === 5) {
            //     gameOver = { gameOver: true, guessedWord: false };
            // }

            if (state.currAttempt.letter !== 5) return;

            return { ...state, currAttempt: { attempt: state.currAttempt.attempt + 1, letter: 0 } };

        // return { attempt: currAttempt.attempt + 1, letter: 0 }
        // return { ...state, currAttempt: { attempt: state.currAttempt.attempt + 1, letter: 0 } };
        // return { ...state, currAttempt: state.currAttempt, gameOver }
        case 'ON_DELETE':
            newBoard = [...state.board];
            newBoard[state.currAttempt.attempt][state.currAttempt.letter - 1] = "";
            return { ...state, board: newBoard, currAttempt: { ...state.currAttempt, letter: state.currAttempt.letter - 1 } };
        case 'ON_SELECT_LETTER':
            newBoard = [...state.board];
            newBoard[state.currAttempt.attempt][state.currAttempt.letter] = action.payload.key;
            return { ...state, board: newBoard, currAttempt: { ...state.currAttempt, letter: state.currAttempt.letter + 1 } };
        default:
            return state;
    }
}
