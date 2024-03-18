import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseURL } from '../../axios/config';

import './Edit.css';

function Edit() {
    const { id } = useParams();

    const [categorys, setCategorys] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [value, setValue] = useState(0);
    const [date_expenser, setDate_expenser] = useState('');
    const [category_select, setCategory_select] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await BaseURL.get('categories/');
                setCategorys(categoryResponse.data.results);

                const expenseResponse = await BaseURL.get(`expenses/${id}`);
                const { description, value, date_expenser, category } = expenseResponse.data;
                setDescricao(description);
                setValue(value);
                setDate_expenser(date_expenser);
                setCategory_select(category);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await BaseURL.put(`expenses/${id}/`, {
                description: descricao,
                value: value,
                date_expenser: date_expenser,
                category: category_select,
            });

            navigate("/");
        } catch (error) {
            console.error("Error update", error);
        }
    };

    return (
        <>
            <h1 className='create-title'>Atualize sua despesa aqui!</h1>
            
            <article className='create_form-content'>
                <form onSubmit={(e) => handleUpdate(e)}>
                    <div className='op-create'>
                        <label htmlFor="descricao" className='title-form'>Descrição:</label>
                        <input type="text" id="descricao" name="descricao" value={descricao} required onChange={(e) => setDescricao(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="valor" className='title-form'>Valor:</label>
                        <input type="number" id="valor" name="valor" min="0" step="0.01" value={value} required onChange={(e) => setValue(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="data" className='title-form'>Data:</label>
                        <input type="date" id="data" name="data" value={date_expenser} required onChange={(e) => setDate_expenser(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="categoria" className='title-form'>Categoria:</label>
                        <select id="categoria" name="categoria" value={category_select} required onChange={(e) => setCategory_select(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            {categorys.map((category) => (
                                <option value={category.name} key={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='bnt-form'>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>     
            </article>
        </>
    );
}

export default Edit;
