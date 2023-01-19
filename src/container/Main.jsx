import { Fragment, useEffect } from "react"
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

const Main = () => {

    console.log(store)
    return (
        <Fragment>
            <Provider store={store} >
                <Header />
                <Board />
                <Keyboard />
            </Provider>
        </Fragment>
    )
}

export default Main;