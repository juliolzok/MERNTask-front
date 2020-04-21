import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const  [ usuario, setUsuario ] = useState({
       nombre: '',
       email: '',
       password: '',
       confirmar: ''
        
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => [
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    ]

    const onSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id='nombre'
                            name='nombre'
                            placeholder='Tu nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Tu email'
                            value={email}
                            onChange={onChange}
                        />             
                    </div>       
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Tu password'
                            value={password}
                            onChange={onChange}
                        />                     
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Confirmar password</label>
                        <input 
                            type="password"
                            id='password'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={confirmar}
                            onChange={onChange}
                        />                     
                    </div>
                    <div className='campo-form'>
                        <input type="submit" value="Registrar" className='btn btn-primario btn-block'/>
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
