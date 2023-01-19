import { Fragment, useEffect } from "react"
import Header from "../components/Header";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    const state = useSelector(state=>state.board)
    const dispatch = useDispatch()
    console.log(state, "state")

    const onEnter = () => {
        if (state.currAttempt.letter !== 5) return;
        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += state.board[state.currAttempt.attempt][i];
        }
        dispatch({ type: 'ON_ENTER', payload: { currWord } });
    };

    const onDelete = () => {
        if (state.currAttempt.letter === 0) return;
        dispatch({ type: 'ON_DELETE' });
    };

    const onSelectLetter = (key) => {
        if (state.currAttempt.letter > 4) return;
        dispatch({ type: 'ON_SELECT_LETTER', payload: { key } });
    };

    return (
        <Fragment>

            <Header />
            <Board />
            <Keyboard
                onEnter={onEnter}
                onDelete={onDelete}
                onSelectLetter={onSelectLetter}
            />

        </Fragment>
    )
}

export default Main;