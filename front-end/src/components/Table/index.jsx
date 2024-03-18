import { useState, useEffect } from 'react'
import { BaseURL } from '../../axios/config'

import { Link } from 'react-router-dom';


import './Table.css';

function Table() {
    const [ expenses, setExpenses ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    const getExpenses = async (page) => {
        try {
            const response = await BaseURL.get(`expenses/?page=${page}`);
            setExpenses(response.data.results);
            setTotalPages(response.data.count);

        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getExpenses(currentPage);
    }, [currentPage]);
    
    const totalPagesCount = Math.ceil(totalPages / 8);

    const handleNextPage = () => {
        if (currentPage < totalPagesCount ) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleDelete = async (id) => {
        try {
            await BaseURL.delete(`expenses/${id}`);
            getExpenses(currentPage);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

return (
    <>
        <div className='table'>
            <table className='table-content'>
                <thead className='title-content'>
                    <tr className='table-row'>
                        <th className='title-th' scope="col">Descrição</th>
                        <th className='title-th' scope="col">Valor</th>
                        <th className='title-th' scope="col">Data</th>
                        <th className='title-th' scope="col">Categoria</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map( (expense) => (
                        <tr className='table-row' key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.value}</td>
                            <td>{expense.date_expenser}</td>
                            <td>{expense.category}</td>
                            <td className='table-bnt-content'>

                                <Link to={`/edit/${expense.id}`}>
                                    <button className='table-bnt'>
                                        <img src="./assets/icons/icons_edit.svg" alt="icone de edição" />
                                    </button>
                                </Link>


                                <button className='table-bnt' onClick={() => handleDelete(expense.id)}>
                                    <img src="./assets/icons/icon_delete.svg" alt="icone de deletar" />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        
        {totalPagesCount <= 1 ? (null):(

            <div className='paginator-content'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPagesCount}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPagesCount}>Próximo</button>
            </div>
            
        )}
    </>

)
}

export default Table;