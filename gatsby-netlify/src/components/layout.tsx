import React from 'react'
import { Link } from 'gatsby';
import './layout.css';

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <nav>
                <img src="https://www.gatsbyjs.com/static/2c9d8be34028a568f89f36ef143f3e17/a3df1/local-futura.jpg" alt="logo" />

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dynamic-page">dynamic</Link>
                    <Link to="/app">client-routes</Link>
                </div>

            </nav>
            <div className="children">
                {children}
            </div>

            <footer>
                <img src="https://www.gatsbyjs.com/static/2c9d8be34028a568f89f36ef143f3e17/a3df1/local-futura.jpg" alt="logo" />
                <a href="https://www.github.com/shahzain-lab" target="_blank">shahzain's github</a>
            </footer>
        </>
    )
}

export default Layout
