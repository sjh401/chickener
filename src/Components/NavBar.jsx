import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/instructions">Instructions</Link>
            <Link to="/scores">Scores</Link>
        </nav>
    )
}
