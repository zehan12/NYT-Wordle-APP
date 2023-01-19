const Keyboard = () => {
    const keyboardKeys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
    ];

    function Key({ keyVal,
        disabled,
        bigKey }) {
        console.log(keyVal, bigKey)
        return (
            <button className={`w-[50px] h-[50px] m-[5px] rounded-md border-none grid place-items-center text-[20px] bg-[#D3D6DA] text-black font-bold text-xs cursor-pointer
            ${keyVal === "" ? "bg-white" : ""}
             ${bigKey ? ' bg-blue-400 w-[20%]' : ''} ${disabled ? 'disabled' : ''}`}>
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