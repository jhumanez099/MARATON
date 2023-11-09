import { useState } from 'react'
import './Admin.css'
import LogoUnicatolica from '../../assets/IMG/logo_unicatolica.png'

//AQUI ESTAN EL CONTEXTO PARA VER LAS PAGINAS DE CREAR LOS USUARIOS O VER LOS PROYECTOS...
import Create_Users from './Create_Users/Create_Users'
import Get_Project from './Get_Project/Get_Project'
import Context from './Context'



export default function Admin() {
    const [currentView, setCurrentView] = useState("");

    // Función para cambiar la vista del Context
    const showPagesContext = (componente) => {
        setCurrentView(componente);
    };

    const componentsContext = {
        Create_Users: <Create_Users />,
        Get_Project: <Get_Project />
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-toggler"
                            aria-controls="navbarTogglerDemo01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-toggler">
                            <a className="navbar-brand">
                                <img src={LogoUnicatolica} alt="logo unicatolica" style={{ height: "38pt" }} />
                            </a>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link mb-2" href="#eventos" aria-current="page" onClick={() => showPagesContext('Create_Users')}>
                                        Crear Usuarios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-2" href="#proyectos" aria-current="page" onClick={() => showPagesContext('Get_Project')}>
                                        Ver proyectos
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link"  href="#Cerrar_sesion">
                                        Cerrar Sesion
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='row'>
                <Context componentPage={componentsContext} stadePage={currentView} />
            </div>
        </div>)
}
