import React from 'react'
import Produto from './Produto'
import './App.css'
import './index.css'


const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event){
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return(
    <div>
      <h1>Lojinha</h1>
      <button style={{margin: '.5rem'}} onClick={handleClick}>Notebook</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>Smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>Tablet</button>

      {loading && <p>Loading...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  )

}

export default App;