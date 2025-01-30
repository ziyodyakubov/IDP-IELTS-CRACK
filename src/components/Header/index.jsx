import "./style.css"

function Header() {
    return (
        <>
            <header className="header">
                <nav className='container'>
                    <ul className='ul-wrapper'>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
