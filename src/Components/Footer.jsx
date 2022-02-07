import React from 'react'
import github from '../assets/images/github.png'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/sjh401"><img src={github} alt="github logo" className="helicopter"/></a>
        </footer>
    )
}
