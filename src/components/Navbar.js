import React from 'react';

//Creating a Navbar Component 
const Navbar=(props)=>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container px-4 px-lg-5">
    <a className="navbar-brand" href="/">Start Bootstrap</a>
    <a
    className='navbar-toggle'
    href='/'
    type="a"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportContent"
    aria-controls="navbarSupportContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"></span>
    </a>

<div className="collapse navbar-collapse" id="navbarSupportContent">
    <ul className="navbar-nav me-auto mb-3 mb-lg-0 ms-lg-4">
        <li className="nav-item">
            <a className='nav-link active' aria-current="page" href="/">
            Home
            </a>
        </li>

        <li className="nav-item">
            <a className='nav-link ' href="/">
            About
            </a>
        </li>
        <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/">
                Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <a className="dropdown-item" href="/">
                        All Products
                    </a>

                </li>
                <li>
                    <hr className="dropdown-divider"/>
                  
                </li>
                <li>
                <a className="dropdown-item" href='/'>
                Popular Items
                </a>
                   
                </li>

                <li>
                <a className="dropdown-item" href="/">
                
                New Arrivals
            </a>
                </li>

               
            </ul>

        </li>

    </ul>
</div>
</div>
</nav>
    )

}

export default Navbar;