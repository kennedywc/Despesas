import './Presentation.css'
import { Link } from 'react-router-dom';

function Presentation() {
    return (
        <article className='presentation-content'>
            <section>
                <h2 className='presentation-title'>Adcionar despesas</h2>
                <p className='presentation-description'>Acompanhe suas despesas com facilidade.</p>
            </section>

            <Link to="create" className='bnt-despesas'>
                Adicionar Despesa
            </Link>
        </article>
    )
};

export default Presentation;