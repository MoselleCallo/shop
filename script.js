function webHeader() {
    return (
        <header class="absolute w-full z-50 bg-white">
            <div class="flex items-center justify-between w-full h-16 p-[25px] md:h-28 md:px-24">
                <div class="flex gap-3 items-center">
                    {/* Toggle Menu */}
                    <toggleMenu />
                    <img class="h-5" alt="logo" src="/images/logo.svg" />
                </div>

                {/* Cart and User*/}
                <div class="flex justify-end gap-3 items-center">
                    <img alt="cart" src="/images/icon-cart.svg" />
                    <img class="h-8 w-8" alt="user" src="/images/image-avatar.png" />
                </div>
            </div>

            {/* HR Line */}
            <div class="hidden md:block px-24 mb-20">
                <hr class="border-t-1 border-gray-400" />
            </div>
        </header>
    );
}

function toggleMenu() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div>
                {isOpen ? (
                    <img
                class="h-4 md:hidden cursor-pointer" alt="menu" src="/images/icon-menu.svg"
                onClick={() => setIsOpen(!isOpen)}/>
                ) : (
                    <img
                class="h-4 md:hidden cursor-pointer" alt="menu" src="/images/icon-close.svg"
                onClick={() => setIsOpen(isOpen)}/>
                )}
            </div>
            
            <ul class={`absolute h-full w-2/3 top-0 pt-36 px-12 ${isOpen ? "block" : "hidden"}`}>
                <li class="py-4 text-gray-900">Collections</li>
                <li class="py-4 text-gray-900">Men</li>
                <li class="py-4 text-gray-900">Women</li>
                <li class="py-4 text-gray-900">About</li>
                <li class="py-4 text-gray-900">Contact</li>
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
            <webHeader />
        </>
    );
}

ReactDOM.render(<App />, document,getElementById("root"));