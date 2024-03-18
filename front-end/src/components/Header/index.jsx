import './Header.css'
import { Link, useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate();
    const handleNavegate = () => {
        return navigate("/")
    }

    return (
        <header className='header-content'>
            <h1 className='logo' onClick={handleNavegate} >PigCoin </h1>
            <nav>
                <Link className='nav-items' to="/">Ver despesas</Link>
            </nav>
        </header>
    )
}

export default Header;