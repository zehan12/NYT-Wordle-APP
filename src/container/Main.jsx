import { Fragment, useEffect } from "react"
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Board from "../components/Board";

const Main = () => {

    console.log(store)
    return (
        <Fragment>
            <Provider store={store} >
                <Header />
                <Board />
            </Provider>
        </Fragment>
    )
}

export default Main;