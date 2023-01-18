import { Fragment } from "react"
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";

const Main = () => {
    return (
        <Fragment>
            <Provider store={store} >
                <Header />
            </Provider>
        </Fragment>
    )
}

export default Main;