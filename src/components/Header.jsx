import { useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
import { BsQuestionCircle, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { RiBarChartFill, RiSettings4Fill } from "react-icons/ri";
import Drawer from "./Drawer";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../actions/themeActions";

const Header = () => {
    const dark = useSelector(state => state.theme.dark)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        document.querySelector('body').style.background =  dark ? `#000000` :"#FFFFFF"

    })

    return (

        <nav className={`flex flex-wrap items-center justify-between p-4 ${dark ? "bg-black" : "bg-white"} border-t-2 border-b-[0.1px]`}>
            {/* <Drawer /> */}
            <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center sm:text-center">
                <h1 className={`text-3xl font-bold text-center uppercase ${dark ? "text-white" : "text-black"}`} >
                    Wordle
                </h1>
            </div>

            <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
                <GiHamburgerMenu size={35} color={dark ? "white" : "black"} />
            </div>
            <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
                <a
                    onClick={() => dispatch(theme(!dark))}
                    className="block mt-5 mr-4  lg:inline-block lg:mt-0" href="#">
                    {
                        dark ? <BsFillSunFill size={30} color={"white"} /> : <BsMoonFill size={30} color={"black"} />
                    }
                </a>
                <a className="block mt-5 mr-4  lg:inline-block lg:mt-0" href="#">
                    <BsQuestionCircle size={30} color={dark ? "white" : "black"} />
                </a>
                <a className="block mt-4 mr-4  lg:inline-block lg:mt-0" href="#">
                    <RiBarChartFill size={30} color={dark ? "white" : "black"} />
                </a>
                <a className="block mt-4  lg:inline-block lg:mt-0 " href="#">
                    <RiSettings4Fill size={30} color={dark ? "white" : "black"} />
                </a>
            </div>
        </nav>

    )
}

export default Header;