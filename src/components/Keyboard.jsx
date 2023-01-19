import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Keyboard = ({
    onEnter,
    onDelete,
    onSelectLetter
}) => {
    const keyboardKeys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
    ];


    const dispatch = useDispatch();
    const currAttempt = useSelector((state) => state.board.currAttempt)
    console.log(currAttempt, "current attempt");
    const board = useSelector((state) => state.board.board);

    const handleKeyboard = useCallback((event) => {
        console.log(event.key, "sd")
        if (event.key.toLowerCase() === "enter") {
            console.log("press :: enter")
            onEnter()
        } else if (event.key.toLowerCase() === "backspace") {
            console.log("press :: backspace")
            onDelete()
        } else {
            keyboardKeys.flat(Infinity).forEach((key) => {
                if (event.key === key) {
                    onSelectLetter(key.toUpperCase())
                }
            })
        }
    })


    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)

        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard]);

    const Key = ({ keyVal, disabled, bigKey }) => {

        const selectLetter = () => {
            if (keyVal === "ENTER") {
                // if (currAttempt.letter !== 5) return;
                // dispatch({ type: "SET_CURR_ATTEMPT", payload: { attempt: currAttempt.attempt + 1, letter: 0 } })
                onEnter()
            } else if (keyVal === "BACKSPACE") {
                // if (currAttempt.letter === 0) return;
                // const newBoard = [...board];
                // newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
                // dispatch({ type: "SET_BOARD", payload: newBoard });
                // dispatch({ type: "SET_CURR_ATTEMPT", payload: { ...currAttempt, letter: currAttempt.letter - 1 } })
                onDelete()
            } else {
                // if (currAttempt.letter > 4) return;
                // const newBoard = [...board];
                // newBoard[currAttempt.attempt][currAttempt.letter] = keyVal;
                // dispatch({ type: "SET_BOARD", payload: newBoard });
                // dispatch({ type: "SET_CURR_ATTEMPT", payload: { ...currAttempt, letter: currAttempt.letter + 1 } })
                onSelectLetter(keyVal)
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
            onKeyDown={handleKeyboard}
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