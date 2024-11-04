import React from 'react';
import './NavbarWithStyling.css';
import About from './about/About';

function NavbarWithStyling({ menu, name, age }) {
    let List;

    if (menu) {
        List = (
            <ul className="navbar-menu">
                {menu.map((item, index) => (
                    <li key={index} className="navbar-item">
                        {item}
                    </li>
                ))}
            </ul>
        );
    } else {
        List = (
            <h1>tidak ditemukan</h1>
        );
    }

    return (
        <>
            <nav className="navbar">
                <h1 className="navbar-title">FSW 2 {name}</h1>
                {List}
            </nav>
            <About name={name[0]} age={age[0]} />
        </>
    );
}

export default NavbarWithStyling;
