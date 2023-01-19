import { Fragment } from "react"
import Header from "./components/Header"
import Main from "./container/Main"
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {

  return (
    <Fragment>
      <Provider store={store} >
        <Main />
      </Provider>
    </Fragment>
  )
}

export default App
