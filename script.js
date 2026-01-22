function WebHeader({cart, count}) {
    return (
        <header className="fixed w-full z-50 bg-white">
            <div className="flex items-center justify-between w-full h-16 p-[25px] md:h-28 md:px-24">
                <div className="flex gap-3 items-center">
                    {/* Toggle Menu */}
                    <ToggleMenu />
                    <img className="h-5" alt="logo" src="/images/logo.svg" />
                </div>

                {/* Cart and User*/}
                <div className="flex justify-end gap-3 items-center">
                    <CartIcon cart={cart} count={count}/>
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
                    className="h-4 mt-[5px]"
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

function CartIcon({ cart, count }) {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="z-50 cursor-pointer" onClick={toggle}>
                <img alt="cart" src="/images/icon-cart.svg" />
            </button>

            <div className={`fixed w-80 max-h-60 top-20 left-4 rounded-md bg-white ${isOpen ? "block" : "hidden"}`}>
                <h1 className="p-4 font-bold">Cart</h1>

                <hr className="pt-4" />

                <div className="align-center">
                    {cart.length === 0 ?
                        (<p className="text-center text-gray-500">Your cart is empty</p>) :
                        (cart.map((item, index) => (
                            <div>
                                <div className="flex gap-1">
                                    <img src={item.src} alt={item.alt} className="" key={index} />

                                    <div className="">
                                        <p className="text-gray-500" key={index}>
                                            {item.name}
                                            <br />
                                            {item.price} x {count}
                                        </p>

                                        <p className="font-bold">
                                            {item.price * count}
                                        </p>
                                    </div>
                                </div>

                                <button className="mt-4 mb-20 w-full flex items-center justify-center bg-orange-500 font-bold p-4 rounded-md">
                                    Checkout
                                </button>
                            </div>
                        ))
                        )
                    }
                </div>

            </div>
        </>
    );
}

function Gallery() {
    const myImages = [
        { src: '/images/image-product-1.jpg', alt: 'product image' },
        { src: '/images/image-product-2.jpg', alt: 'product image' },
        { src: '/images/image-product-3.jpg', alt: 'product image' },
    ];

    const [index, setIndex] = React.useState(0);

    let hasPrev = index > 0;
    let hasNext = index < myImages.length - 1;

    function imgPrev() {
        if (hasPrev) {
            setIndex(index - 1);
        }
    }

    function imgNext() {
        if (hasNext) {
            setIndex(index + 1);
        }
    }

    let myImg = myImages[index];

    return (
        <>
            <div className="relative items-center">
                <div className="w-full absolute p-5 flex justify-between top-1/2 -translate-y-1/2">
                    <button className="z-50" onClick={imgPrev} disabled={!hasPrev}>
                        <img className="bg-white rounded-full p-3" alt="previous" src="/images/icon-previous.svg" />
                    </button>

                    <button className="z-50" onClick={imgNext} disabled={!hasNext}>
                        <img className="bg-white rounded-full p-3" alt="next" src="/images/icon-next.svg" />
                    </button>
                </div>

                <img alt={myImg.alt} src={myImg.src} />
            </div>
        </>
    );
}

function ProductDesc() {
    return (
        <>
            <div className="mx-[25px]">
                <div className="my-5">
                    <p className="pb-2 text-gray-500 text-xs tracking-[2px] font-black uppercase">Sneaker Company</p>
                    <h2 className="py-1 text-gray-900 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
                    <p className="pt-3 text-gray-500 font-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>

                <div className="flex my-7 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold text-gray-900">$125.00</h2>
                        <p className="px-2 bg-gray-900 font-bold text-white rounded-md">50%</p>

                    </div>
                    <p className="text-gray-500 font-bold line-through">$250.00</p>
                </div>
            </div>
        </>
    );
}

function ImgThumbnails() {

}

function AddToCart() { // parent  of cart and count
    const product = {
        id: 1,
        name: 'Shoes',
        price: '$125.00',
        src: '/images/image-product-1.jpg',
        alt: 'Product Image'
    };

    const [cart, setCart] = React.useState([]);

    function add() {
        setCart([...cart, product]);
    }

    //Add to cart
    const [count, setCount] = React.useState(0);

    let hasMinus = count > 0;

    function minus() {
        if (hasMinus) {
            setCount(count - 1);
        }
    }

    function plus() {
        setCount(count + 1);
    }

    return (
        <div className="mx-[25px]">
            <div className="mt-7 px-5 py-4 bg-gray-50 flex justify-between items-center rounded-md">
                <button className="" onClick={minus} disabled={!hasMinus}>
                    <img src="/images/icon-minus.svg" alt="minus" className="" />
                </button>

                <p className="">{count}</p>

                <button className="" onClick={plus}>
                    <img src="/images/icon-plus.svg" alt="plus" className="" />
                </button>
            </div>

            <button className="mt-4 mb-20 w-full flex items-center justify-center gap-2 bg-orange-500 font-bold p-4 rounded-md shadow-xl shadow-orange-500/50"
                onClick={() => add(product)}
            >
                <img src="/images/icon-cart.svg" alt="Cart" className="color-black" />
                <span>Add to cart</span>
            </button>
        </div>
    );
}

function WebFooter() {
    return (
        <>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Callo, Moselle</a>.
            </div>
        </>
    )
}


// App rendering
function App({cart, count}) {
    return (
        <>
            <WebHeader cart={cart} count={count}/>
            <ToggleMenu />

            <div className="md:px-24">
                <main className="pt-8 md:pt-28">
                    <Gallery />
                    <ProductDesc />
                    <AddToCart />
                </main>
            </div>

            <WebFooter />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));