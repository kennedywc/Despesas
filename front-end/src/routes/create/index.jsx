import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseURL } from '../../axios/config';
import './Create.css'

function Create() {
    const [ categorys, setCategorys] = useState([])

    const [descricao, setDescricao] = useState('');
    const [value, setValue] = useState(0);
    const [date_expenser, setDate_expenser] = useState('')
    const [category_select, setCategory_select] = useState('')
  
  
    const getCategorys = async (page) => {
      try {
          const response = await BaseURL.get('categories/');
          setCategorys(response.data.results);
  
      } catch (error) {
          console.log(error);
      }
    };
  
      useEffect(() => {
          getCategorys();
      }, []);

      const navigate = useNavigate();

      const handlecreate = () => {
          return navigate("/")
      }
  
  
      const createExpenser = async (e) => {
          e.preventDefault();
  
          await BaseURL.post('expenses/',{
              description: descricao,
              value: value,
              date_expenser: date_expenser,
              category: category_select,
          })
          handlecreate();
      };


    return(
        <>
            <h1 className='create-title'>Adicione sua despesa aqui!</h1>
            
            <article className='create_form-content'>
                <form onSubmit={(e) => createExpenser(e)}>
                    <div className='op-create'>
                        <label htmlFor="descricao" className='title-form'>Descrição:</label>
                        <input type="text" id="descricao" name="descricao" required onChange={(e) => setDescricao(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="valor" className='title-form'>Valor:</label>
                        <input type="number" id="valor" name="valor" min="0" step="0.01" required onChange={(e) => setValue(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="data" className='title-form'>Data:</label>
                        <input type="date" id="data" name="data" required onChange={(e) => setDate_expenser(e.target.value)}/>
                    </div>

                    <div className='op-create'>
                        <label htmlFor="categoria" className='title-form'>Categoria:</label>
                        <select id="categoria" name="categoria" required onChange={(e) => setCategory_select(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            {categorys.map((category) => (
                                <option value={category.name} key={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='bnt-form'>
                        <button type="submit">Enviar</button>
                    </div>
                </form>     

            </article>
        </>
    )
};

export default Create;