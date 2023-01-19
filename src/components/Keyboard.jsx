import { useDispatch, useSelector } from "react-redux";

const Keyboard = () => {
    const keyboardKeys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
    ];

    const dispatch = useDispatch();
    const currAttempt = useSelector((state) => state.board.currAttempt)
    console.log(currAttempt, "current attempt");
    const board = useSelector((state) => state.board.board);

    const Key = ({ keyVal, disabled, bigKey }) => {

        const selectLetter = () => {
            if (keyVal === "ENTER") {
                if (currAttempt.letter !== 5) return;
                // animation time 
                dispatch({ type: "SET_CURR_ATTEMPT", payload: { attempt: currAttempt.attempt + 1, letter: 0 } })
            } else {
                if (currAttempt.letter > 4) return;
                const newBoard = [...board];
                newBoard[currAttempt.attempt][currAttempt.letter] = keyVal;
                dispatch({ type: "SET_BOARD", payload: newBoard });
                dispatch({ type: "SET_CURR_ATTEMPT", payload: { ...currAttempt, letter: currAttempt.letter + 1 } })
            }
        }
        return (
            <button
                onClick={selectLetter}
                className={`w-[50px] h-[50px] m-[5px] rounded-md border-none grid place-items-center text-[20px] bg-[#D3D6DA] text-black font-bold text-xs cursor-pointer
            ${keyVal === "" ? "bg-white" : ""}
            ${bigKey ? ' bg-blue-400 w-[20%]' : ''} 
            ${disabled ? 'disabled' : ''}`}>
                {keyVal}
            </button>
        )
    }

    return (
        <div className="w-[700px] h-[300px] mt-[40px] mx-auto"
        // onKeyDown={}
        >
            {keyboardKeys.map((keys, index) => {
                return (
                    <div className="flex-[33%] flex flex-row justify-center m-[5px]">
                        {index === 0 && keys.map((key) => {
                            return <Key keyVal={key.toUpperCase()}
                            //  disabled={disabledLetters.includes(key)}
                            />;
                        })}
                        {index === 1 && keys.map((key) => {
                            return <Key keyVal={key.toUpperCase()}
                            // disabled={disabledLetters.includes(key)}
                            />;
                        })}
                        {index === 2 && <>
                            {/* <Key keyVal={"Enter"} bigKey /> */}
                            {keys.map((key) => {
                                return <Key keyVal={key.toUpperCase()}
                                    bigKey={(key === "Enter") ? true :
                                        key === "Backspace" ? true :
                                            false}
                                // disabled={disabledLetters.includes(key)}
                                />;
                            })}
                            {/* <Key keyVal={"Backspace"} bigKey /> */}
                        </>}
                    </div>
                )
            })}
        </div>
    )
};

export default Keyboard;