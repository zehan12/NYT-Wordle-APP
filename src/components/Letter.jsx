import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Letter = ({ letterPos, attemptVal }) => {
    const dispatch = useDispatch();
    const dark = useSelector(state => state.theme.dark)
    const board = useSelector(state => state.board.board)
    const currAttempt = useSelector(state => state.board.currAttempt)
    const correctWord = useSelector(state => state.board.correctWord)
    const disabledLetters = useSelector(state => state.board.disabledLetters);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    console.log(disabledLetters, "")
    useEffect(() => {
        console.log(letter)
        if (letter !== "" && !correct && !almost) {
            dispatch({
                type: "SET_DISABLED_LETTERS",
                payload:[...disabledLetters, letter]
            })
        }
    },[currAttempt.letter])

    const characterStyles = {
        error: 'bg-[#3A3A3C] border-[#3A3A3C]',
        correct: 'bg-[#538D4E] border-[#538D4E]',
        almost: 'bg-[#B59F3B] border-[#B59F3B]'
    }

    return (
        <div className={`flex-[33%] m-1 grid place-items-center 
                        h-full text-3xl font-sans font-bold 
                        ${characterStyles[letterState]} `}
            style={{
                border: "2px solid gray",
                color: dark ? "white" : "black"
            }}>
            {letter}
        </div>
    )
}

export default Letter;