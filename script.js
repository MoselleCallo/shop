function WebHeader() {
    return (
        <header className="absolute w-full z-50 bg-white">
            <div className="flex items-center justify-between w-full h-16 p-[25px] md:h-28 md:px-24">
                <div className="flex gap-3 items-center">
                    {/* Toggle Menu */}
                    <ToggleMenu />
                    <img className="h-5" alt="logo" src="/images/logo.svg" />
                </div>

                {/* Cart and User*/}
                <div className="flex justify-end gap-3 items-center">
                    <img alt="cart" src="/images/icon-cart.svg" />
                    <img className="h-8 w-8" alt="user" src="/images/image-avatar.png" />
                </div>
            </div>

            {/* HR Line */}
            <div className="hidden md:block px-24 mb-20">
                <hr className="border-t-1 border-gray-400" />
            </div>
        </header>
    );
}

function ToggleMenu() {
    const menuItem = styled.div ``
    const [isOpen, setIsOpen] = React.useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="z-50 md:hidden cursor-pointer"
                onClick={toggle}>

                <img
                    className="h-4 mt-4"
                    alt={isOpen ? "close" : "menu"}
                    src={isOpen ?
                        "/images/icon-close.svg" :
                        "/images/icon-menu.svg"} />
            </button>

            <ul className={`absolute h-screen w-2/3 top-0 left-0 pt-16 px-[25px] bg-white ${isOpen ? "block" : "hidden"}`}>
                <li className="py-4 text-gray-900 font-bold">
                    <a href="/"> Collections </a>
                </li>
                <li className="py-4 text-gray-900">
                    <a href="/"> Men </a>
                </li>
                <li className="py-4 text-gray-900">
                    <a href="/"> Women </a>
                </li>
                <li className="py-4 text-gray-900">
                    <a href="/"> About </a>
                </li>
                <li className="py-4 text-gray-900">
                    <a href="/"> Contact </a>
                </li>
            </ul>
        </>
    );
}

function cart() {

}

function imgMain() {

}

function imgNav() {

}

function imgThumbnails() {

}


// App rendering
function App() {
    return (
        <>
            <WebHeader />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));