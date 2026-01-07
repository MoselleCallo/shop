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

function AddToCart() {

}

function Gallery() {
    const images = [
        { src: 'image-product-1.jpg', alt: 'product image' },
        { src: 'image-product-2.jpg', alt: 'product image' },
        { src: 'image-product-3.jpg', alt: 'product image' },
    ];

    let index = 0;
    let img = images[index];

    function imgPrev() {
        if (index < img.length) {
            index = img.lastIndexOf;
        }
        index--;
    }

    function imgNext() {
        if (index > img.length) {
            index = 0;
        }
        index++;
    }

    return (
        <>
        <div className="relative items-center">
            <img alt="product image 1" src="/images/image-product-1.jpg" />
            <hr>
                <div className="w-full absolute p-5 flex justify-between top-1/2 -translate-y-1/2">
                    <button className="z-50" onclick={ imgPrev }> 
                        <img className="bg-white rounded-full p-3" alt="previous" src="/images/icon-previous.svg" />
                    </button>

                    <button className="z-50" onclick={ imgNext }>
                        <img className="bg-white rounded-full p-3" alt="next" src="/images/icon-next.svg" />
                    </button>
                </div>
        </div>
        </>
    );
}

function ProductDesc() {

}



function imgThumbnails() {

}


// App rendering
function App() {
    return (
        <>
            <WebHeader />
            <ToggleMenu />

            <div className="md:px-24">
                <main className="pt-16 md:pt-28">
                    <Gallery />
                    <ProductDesc />
                    <AddToCart />
                </main>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));