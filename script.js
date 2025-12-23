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
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div>
                {isOpen ? (
                    <img
                className="h-4 md:hidden cursor-pointer" alt="menu" src="/images/icon-menu.svg"
                onClick={() => setIsOpen(!isOpen)}/>
                ) : (
                    <img
                className="h-4 md:hidden cursor-pointer" alt="menu" src="/images/icon-close.svg"
                onClick={() => setIsOpen(isOpen)}/>
                )}
            </div>
            
            <ul className={`absolute h-full w-2/3 top-0 pt-36 px-12 ${isOpen ? "block" : "hidden"}`}>
                <li className="py-4 text-gray-900">Collections</li>
                <li className="py-4 text-gray-900">Men</li>
                <li className="py-4 text-gray-900">Women</li>
                <li className="py-4 text-gray-900">About</li>
                <li className="py-4 text-gray-900">Contact</li>
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

const html = document.getElementById("root");
const root = createRoot(html);
root.render(<App />);