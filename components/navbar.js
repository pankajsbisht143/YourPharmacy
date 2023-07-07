let navbar=()=>{
    return `<header>
    <nav>
        <div id="navbar1">
            <div>
                <a href="">
                    <img src="https://img.freepik.com/premium-vector/caduceus-symbol-made-using-bird-wings-poisonous-snakes-healthcare-conceptual-vector-illustration_570429-5842.jpg"
                    alt="">
                </a>
            </div>

            <div id="nav1e">
                <a href="#">
                    <h3>Medicines</h3>
                </a>
                <a href="#">
                    <h3>Doctor</h3>
                </a>
                <a href="#">
                    <h3>Pharmacy</h3>
                </a>
                <a href="#">
                    <h3>Other Services</h3>
                </a>
                <span>
                    <input type="text" placeholder="Search" id="Search">
                    <button id="btn1"><ion-icon name="search-outline"></ion-icon></button>
                </span>
            </div>
        </div>
        <div id="menubar">
            <p id="open"><ion-icon name="menu-outline"></ion-icon></p>
        </div>
        <div id="consultDiv">
            <a href="#">
                <p><ion-icon name="cart-outline"></ion-icon><span id="count"></span></p>
            </a>

            <a href="#">
                <p><ion-icon name="person-circle-outline"></ion-icon>Login</p>
            </a>
            <button id="Consult">Consult Now</button>
        </div>

    </nav>
</header>
<section>
    <div id="menunavbar">
        <p id="close"><ion-icon name="close-circle-outline"></ion-icon>
        </p>
        <div>
            <a href="#">
                <h1>Medicines</h1>
            </a>
            <a href="#">
                <h1>Doctor</h1>
            </a>
            <a href="#">
                <h1>Pharmacy</h1>
            </a>
            <a href="#">
                <h1>Other Services</h1>
            </a>
            <a href="">
                <p><ion-icon name="person-circle-outline"></ion-icon> Login</p>
            </a>
            <button>Consult Now</button>
        </div>
    </div>
</section>`
}

export default navbar;