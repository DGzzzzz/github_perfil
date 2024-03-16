import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [nomeInvalido, setNomeInvalido] = useState(false);
    

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) { // Verificar se a resposta não está ok
                throw new Error('Nome de usuário inválido');
            }
            setNomeInvalido(false);
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 1500);
        })
        .catch(e => {
            setNomeInvalido(true);
            setEstaCarregando(false);
        });
    }, [nomeUsuario]);

    if(nomeInvalido) {
        return (
            <div className="container">Nome de usuário inválido</div>
        );
    } else {
        return (
            <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.listName}>
                                <b>Nome:</b> {repositorio.name} 
                            </div>
                            <div className={styles.listLanguage}>
                                <b>Linguagem:</b> {repositorio.language}
                            </div>
                            <a className={styles.listLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
    }
}
export default ReposList;
