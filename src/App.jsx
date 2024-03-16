import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/RepoList";

import './global.css';


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      {nomeUsuario.length <= 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <input 
            type="text" 
            onBlur={(e) => setNomeUsuario(e.target.value)} 
            placeholder="Digite o nome do usuário"
          />
        </>
      )}

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <input 
            type="text" 
            onBlur={(e) => setNomeUsuario(e.target.value)} 
            placeholder="Digite o nome do usuário"
          />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>  
  );
}

export default App
