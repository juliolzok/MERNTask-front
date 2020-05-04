import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const  { mensaje, autenticado, registrarUsuario } = authContext;

    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }
        if (mensaje) {
            console.log(mensaje);
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }


    }, [mensaje, autenticado, props.history]);


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
        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }
        if (password !== confirmar) {
            mostrarAlerta('Los passowords no coinsiden', 'alerta-error');
            return;
        }
        
        registrarUsuario({
            nombre,
            email,
            password
        });
    }


    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta  ${alerta.categoria}`}>{alerta.msg}</div> ) : null }
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
                            id='confirmar'
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
