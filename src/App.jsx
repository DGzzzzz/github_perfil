import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";




function App() {
  const [formularioEstaVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
    

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
