import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  
  function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }
  function handleChange(infosDoEvento){
    const {getAttribute, value } = infosDoEvento;  
    setValue(
      getAttribute('name'),
      value)
    }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              name="nome"
              type="text"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
          </div>

        <div>
          <label>
            Descricao:
          <textarea
            name="descricao"
            type="text"
            value={values.descricao}
            onChange={handleChange}
          />
        </label>
        </div>

      <div>
        <label>
          Cor:
          <input
            name="cor"
            type="color"
            value={values.cor}
            onChange={handleChange}
          />
        </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;