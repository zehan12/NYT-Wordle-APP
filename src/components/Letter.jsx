import { useSelector } from "react-redux";

const Letter = ({ letterPos, attemptVal }) => {
    const dark = useSelector(state => state.theme.dark)
    const board = useSelector(state => state.board.board)
    const state = useSelector(state=>state.board)
    const letter = board[attemptVal][letterPos];
    return (
        <div className="flex-[33%] m-1 grid place-items-center h-full text-3xl font-sans font-bold"
            style={{ border: "2px solid gray", color: dark ? "white" : "black" }}>
            {letter}
        </div>
    )
}

export default Letter;