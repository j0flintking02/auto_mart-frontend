import React from 'react'

export default function NavbarComponent() {
    return (
        <>
        <nav className="navbar">
            <div className="brand">
                <a href="/index">Auto mart</a>
            </div>
            <ul className="list">
                <li className="list-element"><a href="#">Home</a></li>
                <li className="list-element"><a href="#">Inventory</a></li>
                <li className="list-element"><a href="#">Dealings</a></li>
            </ul>
        </nav>
        </>
    )
}
