import './Main.css'

import Header from '../../components/Header';
import { Outlet } from "react-router-dom"

function Main() {
    return (
        <div className='grid-content'>
            <Header />
            <main className='conteudo-principal'>
                <Outlet />
            </main>
        </div>
    )
}

export default Main;